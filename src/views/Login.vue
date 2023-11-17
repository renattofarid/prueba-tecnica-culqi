<template>
    <div class="bg-transparent h-screen w-full flex flex-row">

        <div class="w-1/2 flex flex-col justify-center items-center">
            <img src="../assets/img/banner.png" alt="logo" class="w-full h-full">
            <div class="w-full h-1/2 bg-black border-t-[5px] border-[#27A376] p-[50px] pb-[80px] flex flex-col gap-6">
                <img src="../assets/img/logo_white.svg" alt="culqui-logo" class="w-[117.75px]">
                <h1 class="text-5xl text-white font-bold tracking-[-0.5px] leading-[120%]">Dale más power ⚡ a tus empleados
                    hoy 💪</h1>
                <h3 class="text-lg text-white font-medium leading-[150%]">Te ayudamos a gestionarlos de manera más sencilla
                </h3>
            </div>
        </div>

        <div class="w-1/2 flex flex-col h-screen justify-center items-center py-6 relative">
            <form @submit.prevent="handleSubmit">
                <div class="flex flex-col gap-8 min-w-[480px]">
                    <h4 class="text-2xl font-bold leading-[130%] text-center">Inicia sesión</h4>

                    <div class="flex flex-col gap-6">
                        <div class="flex flex-col gap-[10px]">
                            <label for="email" class="text-sm font-medium leading-[160%]">Correo electrónico <span
                                    class="text-[#E03137]">*</span></label>
                            <input v-model="formData.email" type="email" name="email" id="email"
                                placeholder="Ingresa el correo electrónico"
                                class="w-full py-4 px-5 rounded-[10px] text-sm font-medium leading-[160%] border focus-visible:border-[#0CAF60] focus:outline-none placeholder:text-[#A0AEC0] placeholder:text-sm placeholder:font-normal hover:border-[#0CAF60] hover:outline-none transition duration-500 ease-in-out">
                        </div>
                        <div class="flex flex-col gap-[10px]">
                            <label for="password" class="text-sm font-medium leading-[160%]">Contraseña <span
                                    class="text-[#E03137]">*</span></label>
                            <input v-model="formData.password" type="password" name="password" id="password"
                                placeholder="Ingresa la contraseña"
                                class="w-full py-4 px-5 rounded-[10px] text-sm font-medium leading-[160%] border focus-visible:border-[#0CAF60] focus:outline-none placeholder:text-[#A0AEC0] placeholder:text-sm placeholder:font-normal hover:border-[#0CAF60] hover:outline-none transition duration-500 ease-in-out">
                        </div>
                    </div>

                    <div class="flex flex-row gap-1" v-if="errors">
                        <img src="../assets/img/alert-circle.svg" alt="">
                        <p class="text-sm text-[#E03137] leading-[160%]">Correo o contraseña incorrectos</p>
                    </div>

                    <button
                        class="w-full py-[21px] px-6 bg-[#111827] text-white rounded-[10px] font-bold text-base leading-[150%] tracking-[0.3px] hover:bg-[#1b4f3c] transition duration-500 ease-in-out flex items-center justify-center"
                        type="submit">
                        <span v-if="loading">
                            <img src="../assets/img/loader.gif" alt="Loading" class="w-4" />
                        </span>
                        <span v-else>Iniciar sesión</span></button>


                    <div class="flex flex-row justify-center items-center gap-2">
                        <p class="text-sm font-medium leading-[160%] text-[#A0AEC0]">¿Eres nuevo aquí?</p>
                        <a href="#"
                            class="text-sm text-[#27A376] hover:text-[#2a755a] transition duration-500 ease-in-out">Crea una
                            cuenta</a>
                    </div>
                </div>

                <div class="absolute bottom-6">
                    <p class="text-[#A0AEC0] text-sm font-medium leading-[160%]">© 2023 Culqi . Todos los derechos
                        reservados</p>
                </div>
            </form>
        </div>

    </div>
</template>

<script lang="ts" setup>
    import useAuth from '../composables/useAuth';
    const { loading, errors, handleSubmit, formData } = useAuth();
</script>