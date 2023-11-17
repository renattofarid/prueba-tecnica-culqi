<template>
    <div>
      <MenuItem
        v-for="(item, _) in menuItems"
        :key="item.routeName"
        :routeName="item.routeName"
        :currentRoute="currentRoute"
        :iconComponent="item.iconComponent"
        :menuText="item.menuText"
      />
    </div>
  </template>

  <script lang="ts">
  import { shallowRef } from 'vue'
  import MenuItem from './MenuItem.vue';
  import { IconEmployees, IconRecruitment } from './';

  const iconEmployees = shallowRef(IconEmployees);
  const iconRecruitment = shallowRef(IconRecruitment);
  export default {
    components: {
      MenuItem,
      iconEmployees,
      iconRecruitment,
    },
    props: {
      currentRoute: String,
    },
    data() {
      return {
        menuItems: [
          { routeName: 'empleados', iconComponent: iconEmployees, menuText: 'Empleados' },
          { routeName: 'reclutamiento', iconComponent: iconRecruitment, menuText: 'Reclutamiento' },
        ],
      };
    },
  };
  </script>
