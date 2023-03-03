import { AxiosError } from 'axios';
import { ref } from 'vue';

export default function useFetch<T, A>(cb: (params: A) => Promise<T>) {
  const data = ref<T>();
  const error = ref<AxiosError | null>();
  const isLoading = ref(false);

  const fetch = async (params: A) => {
    error.value = null;
    try {
      isLoading.value = true;
      data.value = await cb(params);
    } catch (e) {
      if (e instanceof AxiosError) {
        error.value = e;
      }
    } finally {
      isLoading.value = false;
    }
  };

  return { data, error, isLoading, fetch };
}
