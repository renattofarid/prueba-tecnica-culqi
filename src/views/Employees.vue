<template>
    <div class="flex flex-col gap-6">

        <div class="flex flex-row justify-between items-center p-6 pb-0">
            <div class="flex flex-col gap-2">
                <h3 class="text-2xl font-bold text-[#111827] leading-[140%]">Empleados</h3>
                <p v-if="!loading" class="text-[#687588] text-sm font-medium leading-[160%]">Gestiona tus empleados</p>
            </div>
            <div v-if="loading" class="skeleton h-[34px] w-[100px] rounded-[100px] bg-[#F1F2F4]"></div>
            <div v-else class="flex flex-row gap-5">
                <button
                    class="flex items-center gap-2 py-5 px-6 border border-[#111827] rounded-[10px] text-base font-bold leading-6 tracking-[0.3px] hover:bg-[#f1f1f1] transition duration-500 ease-in-out"
                    @click="applyRipple">
                    <img src="../assets/img/file-download.svg" alt="" class="w-5 h-5 pointer-events-none">
                    Descargar</button>
                <button
                    class="flex items-center gap-2 py-5 px-6 bg-[#111827] rounded-[10px]  text-white text-base font-bold leading-6 tracking-[0.3px] hover:bg-[#1b4f3c] transition duration-500 ease-in-out"
                    @click="applyRipple">
                    <img src="../assets/img/plus.svg" alt="" class="w-5 h-5 pointer-events-none"> Nuevo</button>
            </div>
        </div>

        <div v-if="loading" class="flex flex-row gap-4 p-6 py-0">
            <div class="skeleton w-full bg-[#F8F8F8] rounded-[100px] h-9"></div>
            <div class="skeleton w-full bg-[#F8F8F8] rounded-[100px] h-9"></div>
            <div class="skeleton w-full bg-[#F8F8F8] rounded-[100px] h-9"></div>
        </div>
        <div v-else class="flex flex-row gap-4 w-full p-6 py-0">
            <div class="relative w-2/3">
                <input type="text"
                    class="w-full py-4 px-5 pr-10 border-gray-300 rounded-[10px] text-sm font-medium leading-[160%] border focus-visible:border-[#0CAF60] focus:outline-none placeholder:text-[#A0AEC0] placeholder:text-sm placeholder:font-normal hover:border-[#0CAF60] hover:outline-none transition duration-500 ease-in-out"
                    placeholder="Buscar empleado" />
                <div class="absolute inset-y-0 right-0 flex items-center pr-5">
                    <img src="../assets/img/search.svg" alt="Icono" class="h-4 w-4" />
                </div>
            </div>
            <div class="relative w-1/3">
                <select
                    class="custom-select w-full py-4 px-5 border-gray-300 rounded-[10px] text-[#111827] text-sm font-medium leading-[160%] border focus-visible:border-[#0CAF60] focus:outline-none placeholder:text-[#A0AEC0] placeholder:text-sm placeholder:font-normal hover:border-[#0CAF60] hover:outline-none transition duration-500 ease-in-out"
                    v-model="selectedOption">
                    <option value="" disabled selected hidden>Nombre de cargo</option>
                    <option value="opcion1">Opción 1</option>
                    <option value="opcion2">Opción 2</option>
                    <option value="opcion3">Opción 3</option>
                </select>
                <div class="absolute inset-y-0 right-0 flex items-center pr-5">
                    <img src="../assets/img/chevron-down.svg" alt="Icono" class="h-5 w-5 pointer-events-none" />
                </div>
            </div>
        </div>

        <div v-if="loading" class="flex flex-col pl-6 pb-6">
            <div class="bg-[#fafafa] w-full h-14 flex flex-row p-4 gap-8 rounded-s-[10px] overflow-hidden">
                <div class="flex flex-row gap-[10px]">
                    <div class="skeleton w-5 h-5 bg-[#F1F2F4] rounded-full"></div>
                    <div class="skeleton h-5 w-[148px] rounded-[100px] bg-[#F1F2F4]"></div>
                </div>
                <div class="flex flex-row gap-[10px]">
                    <div class="skeleton h-5 w-[67px] rounded-[100px] bg-[#F1F2F4]"></div>
                    <div class="skeleton w-5 h-5 bg-[#F1F2F4] rounded-full"></div>
                </div>
                <div class="flex flex-row gap-[10px]">
                    <div class="skeleton h-5 w-[75px] rounded-[100px] bg-[#F1F2F4]"></div>
                    <div class="skeleton w-5 h-5 bg-[#F1F2F4] rounded-full"></div>
                </div>
                <div class="flex flex-row gap-[10px]">
                    <div class="skeleton h-5 w-[75px] rounded-[100px] bg-[#F1F2F4]"></div>
                    <div class="skeleton w-5 h-5 bg-[#F1F2F4] rounded-full"></div>
                </div>
                <div class="flex flex-row gap-[10px]">
                    <div class="skeleton h-5 w-[71px] rounded-[100px] bg-[#F1F2F4]"></div>
                    <div class="skeleton w-5 h-5 bg-[#F1F2F4] rounded-full"></div>
                </div>
                <div class="flex flex-row gap-[10px]">
                    <div class="skeleton h-5 w-[93px] rounded-[100px] bg-[#F1F2F4]"></div>
                    <div class="skeleton w-5 h-5 bg-[#F1F2F4] rounded-full"></div>
                </div>
                <div class="flex flex-row gap-[10px]">
                    <div class="skeleton h-5 w-[56px] rounded-[100px] bg-[#F1F2F4]"></div>
                    <div class="skeleton w-5 h-5 bg-[#F1F2F4] rounded-full"></div>
                </div>
                <div class="flex flex-row gap-[10px]">
                    <div class="skeleton h-5 w-[114px] rounded-[100px] bg-[#F1F2F4]"></div>
                    <div class="skeleton w-5 h-5 bg-[#F1F2F4] rounded-full"></div>
                </div>
            </div>

            <div v-for="index in 7" :key="index"
                class="bg-[#fff] w-full h-[63px] flex flex-row justify-start items-center p-4 gap-8 border-b-[1px] border-b-[#F1F2F4] overflow-hidden">
                <div class="flex flex-row gap-[10px]">
                    <div class="skeleton w-5 h-5 bg-[#F1F2F4] rounded-full"></div>
                    <div class="skeleton h-5 w-[148px] rounded-[100px] bg-[#F1F2F4]"></div>
                </div>
                <div class="flex flex-row gap-[10px]">
                    <div class="skeleton h-5 w-[97px] rounded-[100px] bg-[#F1F2F4]"></div>
                </div>
                <div class="flex flex-row gap-[10px]">
                    <div class="skeleton h-5 w-[105px] rounded-[100px] bg-[#F1F2F4]"></div>
                </div>
                <div class="flex flex-row gap-[10px]">
                    <div class="skeleton h-5 w-[105px] rounded-[100px] bg-[#F1F2F4]"></div>
                </div>
                <div class="flex flex-row gap-[10px]">
                    <div class="skeleton h-5 w-[101px] rounded-[100px] bg-[#F1F2F4]"></div>
                </div>
                <div class="flex flex-row gap-[10px]">
                    <div class="skeleton h-5 w-[91px] rounded-[100px] bg-[#F1F2F4]"></div>
                    <div class="skeleton w-5 h-5 bg-[#F1F2F4] rounded-full"></div>
                </div>
                <div class="flex flex-row gap-[10px]">
                    <div class="skeleton h-5 w-[86px] rounded-[100px] bg-[#F1F2F4]"></div>
                </div>
                <div class="flex flex-row gap-[10px]">
                    <div class="skeleton h-5 w-[31.33px] rounded-[100px] bg-[#F1F2F4]"></div>
                    <div class="skeleton h-5 w-[31.33px] rounded-[100px] bg-[#F1F2F4]"></div>
                    <div class="skeleton h-5 w-[31.33px] rounded-[100px] bg-[#F1F2F4]"></div>
                </div>
            </div>
        </div>

        <div v-else class="px-6 pb-6">
            <div class="max-w-full mx-auto pb-6">
                <table class="w-full border-collapse">
                    <thead>
                        <tr class="bg-[#FAFAFA]">
                            <th
                                class="p-4 text-[#687588] text-xs font-bold leading-[160%] tracking-[0.2px] rounded-s-[10px] text-left">
                                Nombre</th>
                            <th class="p-4 text-[#687588] text-xs font-bold leading-[160%] tracking-[0.2px] text-left">
                                Nombre cargo</th>
                            <th class="p-4 text-[#687588] text-xs font-bold leading-[160%] tracking-[0.2px] text-left">
                                Departamento</th>
                            <th class="p-4 text-[#687588] text-xs font-bold leading-[160%] tracking-[0.2px] text-left">
                                Oficina</th>
                            <th class="p-4 text-[#687588] text-xs font-bold leading-[160%] tracking-[0.2px] text-left">
                                Cuenta</th>
                            <th
                                class="p-4 text-[#687588] text-xs font-bold leading-[160%] tracking-[0.2px] rounded-e-[10px] text-right">
                                Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="emp in employees" :key="emp.id" class="border-b border-[#F1F2F4]">
                            <td class="p-4 text-xs font-normal leading-[160%]">
                                <div class="flex flex-col gap-0">
                                    <h4 class="text-[#111827] font-medium leading-[160%]">{{ emp.nombre }}</h4>
                                    <span class="text-[#A0AEC0] font-[10px] leading-[160%]">{{ emp.correo }}</span>
                                </div>
                            </td>
                            <td class="p-4 text-[#111827] text-xs font-normal leading-[160%]">{{ emp.cargo }}</td>
                            <td class="p-4 text-[#111827] text-xs font-normal leading-[160%]">{{ emp.departamento }}</td>
                            <td class="p-4 text-[#111827] text-xs font-normal leading-[160%]">{{ emp.oficina }}</td>
                            <td class="p-4 text-[#111827] text-xs font-normal leading-[160%]">{{ emp.estadoCuenta }}</td>
                            <td class="p-4 text-[#111827] text-xs font-normal leading-[160%]">
                                <div class="flex flex-row gap-[10px] justify-end">
                                    <button
                                        class="w-[30px] h-[30px] bg-[#27A376] rounded-lg flex justify-center items-center"
                                        @click="applyRipple"><img src="../assets/img/eye.svg" alt="Icono"
                                            class="h-4 w-4 pointer-events-none" /></button>
                                    <button
                                        class="w-[30px] h-[30px] bg-[#2F78EE] rounded-lg flex justify-center items-center"
                                        @click="applyRipple"><img src="../assets/img/edit.svg" alt="Icono"
                                            class="h-4 w-4 pointer-events-none" /></button>
                                    <button
                                        class="w-[30px] h-[30px] bg-[#E03137] rounded-lg flex justify-center items-center"
                                        @click="applyRipple"><img src="../assets/img/trash.svg" alt="Icono"
                                            class="h-4 w-4 pointer-events-none" /></button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="flex flex-row justify-between pl-6 pb-6">
                <div class="flex flex-row gap-6">
                    <button
                        class="p-[10px] rounded-[10px] border border-[#F1F2F4] hover:border-[#c9cacc] transition duration-500 ease-in-out"
                        @click="handlePageChange(currentPage - 1)" :disabled="currentPage === 1"
                        >
                        <img src="../assets/img/chevron-left.svg" alt="Icono"
                            class="h-4 w-4 pointer-events-none" /></button>
                    <div class="flex">
                        <template v-if="totalPages > 5">
                            <template v-for="(pageNumber, _) in visiblePages" :key="pageNumber">
                                <button  @click="handlePageChange(pageNumber)"
                                    :class="{ active: pageNumber === currentPage }"
                                    class="text-xs font-semibold leading-[160%] px-[15px] py-[5px] rounded-[10px] border border-[transparent] hover:border-[#F1F2F4] transition duration-500 ease-in-out"
                                    v-if="visiblePages[visiblePages.length - 1] !== pageNumber">
                                    {{ pageNumber }}
                                </button>
                            </template>

                            <div v-if="currentPage < (totalPages - 2)" class="text-xs font-semibold leading-[160%] px-3 pb-[9px] py-[5px] flex items-end">...
                            </div>

                            <button @click="handlePageChange(totalPages)" :class="{ active: totalPages === currentPage }"

                                class="text-xs font-semibold leading-[160%] px-[15px] py-[5px] rounded-[10px] border border-[transparent] hover:border-[#F1F2F4] transition duration-500 ease-in-out">
                                {{ totalPages }}
                            </button>
                        </template>
                        <template v-else>
                            <template v-for="pageNumber in visiblePages" :key="pageNumber">
                                <button @click="handlePageChange(pageNumber)"
                                    :class="{ active: pageNumber === currentPage }"
                                    class="text-xs font-semibold leading-[160%] px-[15px] py-[5px] rounded-[10px] border border-[transparent] hover:border-[#F1F2F4] transition duration-500 ease-in-out">
                                    {{ pageNumber }}
                                </button>
                            </template>
                        </template>
                    </div>
                    <button
                        class="p-[10px] rounded-[10px] border border-[#F1F2F4] hover:border-[#c9cacc] transition duration-500 ease-in-out"
                        @click="handlePageChange(currentPage + 1)" :disabled="currentPage === totalPages">
                        <img src="../assets/img/chevron-right.svg" alt="Icono"
                            class="h-4 w-4 pointer-events-none" /></button>
                </div>

                <div class="flex gap-4 items-center">
                    <p class="text-[#687588] text-xs font-medium leading-[160%]">Mostrando 1 a {{ employees.length }} de {{
                        totalResults }}
                        registros</p>
                    <div class="relative w-auto">
                        <select
                            class="custom-select w-auto p-[10px] pr-10 border-gray-300 rounded-[10px] text-[#111827] text-xs font-medium leading-[160%] border focus-visible:border-[#0CAF60] focus:outline-none placeholder:text-[#A0AEC0] placeholder:text-xs placeholder:font-normal hover:border-[#0CAF60] hover:outline-none transition duration-500 ease-in-out"
                            v-model="selectedOptionPage">
                            <option value="" disabled selected hidden>Mostrar 10</option>
                            <option :value="5">Mostrar 5</option>
                            <option :value="10">Mostrar 10</option>
                            <option :value="15">Mostrar 15</option>
                        </select>
                        <div class="absolute inset-y-0 right-0 flex items-center pr-5">
                            <img src="../assets/img/chevron-up.svg" alt="Icono" class="h-4 w-4 pointer-events-none" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script lang="ts" setup>

import useEmployees from '../composables/useEmployees';

const {
    employees,
    totalResults,
    currentPage,
    totalPages,
    visiblePages,
    selectedOption,
    selectedOptionPage,
    handlePageChange,
    applyRipple,
    loading
} = useEmployees();

</script>

<style scoped>
button.active {
    background-color: #F8F8F8;
}

button:disabled {
    cursor: not-allowed;
    opacity: 0.5;
}

.custom-select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
}

@keyframes shimmer {
    0% {
        background-position: -1000px 0;
    }

    100% {
        background-position: 1000px 0;
    }
}

.skeleton {
    background: linear-gradient(90deg, #F8F8F8 25%, #f2f2f2 50%, #F8F8F8 75%);
    background-size: 1000px 100%;
    animation: shimmer 1.5s infinite linear;
}

.ripple-btn {
    overflow: hidden;
    position: relative;
}

.ripple-btn:before,
.ripple-btn:after {
    content: "";
    position: absolute;
    border-radius: 50%;
    width: 0;
    height: 0;
    background: rgba(255, 255, 255, 0.3);
    transform-origin: center;
    animation: ripple 0.6s linear;
}

.ripple-btn:before {
    animation-delay: 0s;
}

@keyframes ripple {
    to {
        width: 200px;
        height: 200px;
        transform: translate(-50%, -50%);
        opacity: 0;
    }
}
</style>