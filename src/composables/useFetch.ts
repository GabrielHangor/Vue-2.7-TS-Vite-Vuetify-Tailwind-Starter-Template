import { AxiosError } from 'axios';
import { ref } from 'vue';

interface Options {
  readonly isCacheable: boolean;
}

type FetchFunction<T, A extends any[]> = (...args: A) => Promise<T>;

const cache = new Map<string, unknown>();

export default function useFetch<T, A extends any[] = []>(
  cb: FetchFunction<T, A>,
  options: Options = { isCacheable: false }
) {
  const data = ref<T>();
  const error = ref<AxiosError | null>(null);
  const isLoading = ref(false);

  const fetch = async (...args: A) => {
    error.value = null;

    console.log(cache);
    console.log(...args);

    const cacheKey = options.isCacheable ? `${cb.name}/${JSON.stringify(args)}` : undefined;

    if (cacheKey !== undefined && cache.has(cacheKey)) {
      data.value = cache.get(cacheKey) as T;
    } else {
      try {
        isLoading.value = true;
        data.value = await cb(...args);

        if (cacheKey !== undefined) {
          cache.set(cacheKey, data.value);
        }
      } catch (e) {
        if (e instanceof AxiosError) {
          error.value = e;
        }
      } finally {
        isLoading.value = false;
      }
    }
  };

  const clearCache = () => cache.clear();
  return { data, error, isLoading, fetch, clearCache };
}
