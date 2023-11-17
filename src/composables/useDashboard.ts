import { ref, watch } from 'vue';
import { useUserStore } from '../stores/user';
import { useRouter, useRoute } from 'vue-router';

export default function useDashboard() {
  const currentRoute = ref('empleados');

  const $route = useRoute();
  const router = useRouter();

  watch($route, (to, _from) => {
    currentRoute.value = to.name as string;
  });

  const { getFullName, getInitialsName } = useUserStore();

  const logout = () => {
    useUserStore().logout();
    localStorage.removeItem('token');
    router.push({ name: 'login' });
  };

  return {
    currentRoute,
    getFullName,
    getInitialsName,
    logout,
  };
}
