// useEmployeesData.ts
import { ref, watch } from 'vue';
import useHttpClient from '../composables/useHttpClient';

interface EmployeesData {
    status: string;
    data: Employee[];
    total: number;
}

interface Employee {
    id: number;
    nombre: string;
    correo: string;
    cargo: string;
    departamento: string;
    oficina: string;
    estadoCuenta: string;
}

export default function useEmployeesData() {
    const { loading, sendRequest } = useHttpClient();

    const employees = ref<Employee[]>([]);
    const totalResults = ref(0);
    const limit = ref(5);
    const currentPage = ref(1);
    const totalPages = ref(0);
    const visiblePages = ref<number[]>([]);

    const selectedOption = ref('');
    const selectedOptionPage = ref(5);

    // watch total de paginas
    watch([limit, totalResults], () => {
        totalPages.value = Math.ceil(totalResults.value / limit.value);
    });

    // watch paginas visibles
    watch([currentPage, totalPages], () => {
        visiblePages.value = [];
        const startPage = Math.max(1, currentPage.value - 2);
        const endPage = Math.min(totalPages.value, startPage + 4);

        for (let i = startPage; i <= endPage; i++) {
            visiblePages.value.push(i);
        }
    });

    // watch selectedOptionPage
    watch(selectedOptionPage, () => {
        limit.value = Number(selectedOptionPage.value);
        currentPage.value = 1;
        loadData();
    });

    const handlePageChange = (page: number) => {
        currentPage.value = page;
        loadData();
    }

    const applyRipple = (e: any) => {
        const btn = e.target;
        btn.classList.add("ripple-btn");

        setTimeout(() => {
            btn.classList.remove("ripple-btn");
        }, 600);
    }

    const loadData = async () => {
        loading.value = true;
        const response: EmployeesData = await sendRequest('get', `/empleados?limit=${limit.value}&page=${currentPage.value}`);
        employees.value = response.data;
        totalResults.value = response.total;
        loading.value = false;
    }

    // Load initial data
    loadData();

    return {
        employees,
        totalResults,
        limit,
        currentPage,
        totalPages,
        visiblePages,
        selectedOption,
        selectedOptionPage,
        handlePageChange,
        applyRipple,
        loading
    };
}
