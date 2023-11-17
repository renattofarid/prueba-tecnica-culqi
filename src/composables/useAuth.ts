import { ref, Ref } from 'vue';
import { useUserStore } from '../stores/user';
import useHttpClient from './useHttpClient';
import { useRouter } from 'vue-router';
import { userDefault } from '../utils/constants';

interface Form {
    email: string;
    password: string;
}

export default function useAuth() {
    const router = useRouter();
    const userStore = useUserStore();

    if (localStorage.getItem('token')) {
        // aquí se tendría que validar que el token sea válido, pero por simplicidad y por falta de servicios de backend, asumiré que el token es válido
        router.push('/dashboard/empleados');
        // simulamos el valor de un usuario
        userStore.setUserData(userDefault);
    }

    const formData: Ref<Form> = ref({
        email: '',
        password: '',
    });

    const { loading, sendRequest } = useHttpClient();

    const errors: Ref<boolean> = ref(false);

    const handleSubmit = async () => {
        try {
            loading.value = true;
            const resp = await sendRequest('post', '/auth/login', {
                correo: formData.value.email,
                password: formData.value.password,
            } as unknown as undefined);

            localStorage.setItem('token', resp.data.token);
            userStore.setUserData(resp.data.user);

            router.push('/dashboard/empleados');

            errors.value = false;
        } catch (error) {
            errors.value = true;
        } finally {
            loading.value = false;
        }
    };

    return {
        formData,
        loading,
        errors,
        handleSubmit,
        userStore
    };
}
