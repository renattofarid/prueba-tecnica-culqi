<template>
    <router-link :to="{ name: routeName }">
        <div
            class="flex flex-row gap-[10px] items-center py-4 rounded hover:bg-[#2ebb7241] transition duration-500 ease-in-out">
            <component :is="iconComponent" :active="isActive" />
            <p class="text-sm font-bold leading-[160%] tracking-[0.2px]"
                :class="{ 'text-[#2ebb72]': isActive, 'text-[#111827]': !isActive }">
                {{ menuText }}
            </p>
        </div>
    </router-link>
</template>

<script lang="ts">
export default {
    props: {
        routeName: String,
        currentRoute: String,
        iconComponent: Object,
        menuText: String,
    },
    computed: {
        isActive() {
            return this.routeName === this.currentRoute;
        },
    },
};
</script>