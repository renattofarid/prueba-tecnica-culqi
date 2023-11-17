<template>
    <div class="flex flex-row">
        <!-- Sidebar -->
        <div
            class="bg-white text-white min-w-[280px] flex flex-col min-h-screen py-6 px-8 justify-between gap-6 border-r border-[#E9EAEC]">
            <img src="../assets/img/logo_black.svg" alt="culqi-logo" class="h-8 text-center">

            <div class="h-full w-full">
                <div class="flex flex-col">
                    <Menu :currentRoute="currentRoute" />
                </div>
            </div>

            <button
                class="py-[15px] px-[24px] rounded-[10px] border border-[#111827] self-stretch text-sm text-[#111827] font-bold leading-[160%] tracking-[0.2px] hover:bg-[#ffe1e1] transition duration-500 ease-in-out"
                @click="logout()">Salir</button>
        </div>

        <!-- Content Principal -->
        <div class="flex-1 flex flex-col overflow-hidden">
            <!-- Navbar -->
            <header class="bg-white h-[96px] py-6 px-8 border-b border-[#E9EAEC]">
                <div class="flex items-center justify-end p-4 gap-2">
                    <div
                        class="w-8 h-8 rounded-full bg-[#EB6F25] flex items-center justify-center text-white text-sm font-bold leading-[140%] tracking-[0.2px]">
                        {{ getInitialsName }} </div>
                    <div class="text-[#111827] text-xs font-bold leading-[140%]"> {{ getFullName }} </div>
                </div>
            </header>

            <!-- App -->
            <main class="flex-1 overflow-x-hidden overflow-y-auto bg-[#fafafa] pt-8">
                <div class="mx-6 rounded-2xl bg-white h-auto">
                    <router-view />
                </div>
            </main>
        </div>
    </div>
</template>

<script lang="ts" setup>
import useDashboard from '../composables/useDashboard';
import Menu from '../components/Menu.vue';
const { currentRoute, getFullName, getInitialsName, logout } = useDashboard();
</script>
