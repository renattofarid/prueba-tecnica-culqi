import { ref } from 'vue';
import httpClient from '../utils/httpRequests';

export default function useHttpClient() {
  const loading = ref(false);

  const sendRequest = async (method: string, url: string, data = null) => {
    loading.value = true;

    try {
      const response = await (httpClient as any)[method](url, data);
      return response.data;
    } catch (error) {
      console.error('Error en la solicitud:', error);
      throw error;
    } finally {
      loading.value = false;
    }
  };

  return { loading, sendRequest };
}
