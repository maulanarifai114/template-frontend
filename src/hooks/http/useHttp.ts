import { useCallback } from "react";
import { Config, http } from "@/utils/http";
import { useLoadingBar } from "../loading-bar/useLoadingBar";
import { useRouter } from "next/navigation";
import { useRecoilState } from "recoil";
import { profileState } from "@/state/profile.state";
import { useSnackbar } from "../snackbar/useSnackbar";

const apiUrl = process.env.NEXT_PUBLIC_API_URL ?? "";

export interface HttpResponse<T> {
  data: T;
  message: string;
  statusCode: number;
}

export const useHttp = ({ isUseLoadingBar, isUseSnackbar, isRedirectUnauthorized }: { isUseLoadingBar?: boolean; isUseSnackbar?: boolean; isRedirectUnauthorized?: boolean } = { isUseLoadingBar: true, isUseSnackbar: true, isRedirectUnauthorized: true }) => {
  const loadingBar = useLoadingBar();
  const router = useRouter();
  const [_, setProfile] = useRecoilState(profileState);
  const snackbar = useSnackbar();

  const withLoading = useCallback(
    async <T>(request: () => Promise<HttpResponse<T>>): Promise<HttpResponse<T>> => {
      if (isUseLoadingBar) loadingBar.start();
      try {
        const response = await request();
        if (isUseLoadingBar) loadingBar.end();
        return response;
      } catch (error: any) {
        if (error.statusCode && error.statusCode === 401 && isRedirectUnauthorized) {
          router.push("/auth/login");
          setProfile(null);
        }
        if (isUseSnackbar) snackbar.start(error.message, "error");
        if (isUseLoadingBar) loadingBar.end();
        throw error;
      }
    },
    [loadingBar.start, loadingBar.end],
  );

  const get = useCallback(
    <T>(url: string, config?: Config) => {
      return withLoading(() => http.get<HttpResponse<T>>(apiUrl + url, config));
    },
    [withLoading],
  );

  const post = useCallback(
    <T>(url: string, body?: any, config?: Config) => {
      return withLoading(() => http.post<HttpResponse<T>>(apiUrl + url, body, config));
    },
    [withLoading],
  );

  const put = useCallback(
    <T>(url: string, body?: any, config?: Config) => {
      return withLoading(() => http.put<HttpResponse<T>>(apiUrl + url, body, config));
    },
    [withLoading],
  );

  const del = useCallback(
    <T>(url: string, config?: Config) => {
      return withLoading(() => http.delete<HttpResponse<T>>(apiUrl + url, config));
    },
    [withLoading],
  );

  return { get, post, put, delete: del };
};
