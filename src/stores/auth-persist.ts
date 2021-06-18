import create from "zustand";
import { persist } from "zustand/middleware";
import mainApi from "@utils/rest";
import router from "next/router";

interface Store {
  token: string;
  loading: boolean;
  error: boolean;
  onLogin: (data?: { email: string; password: string }) => Promise<void>;
  onLogout: () => void;
}

const useAuth = create<Store>(
  persist(
    (set) => ({
      token: "",
      loading: false,
      error: false,
      onLogin: async (payload) => {
        try {
          set({ loading: true, error: false });

          const { data } = await mainApi.post("login", payload);

          set({ loading: false, error: false, token: data.token });

          router.replace("/home", { query: { foo: "bar" }, pathname: "/home" });
        } catch (error) {
          set({ loading: false, error: true });
        }
      },
      onLogout: () => {
        set({ token: "" });

        router.replace("/", { pathname: "/" });
      },
    }),
    { name: "auth" }
  )
);

export default useAuth;
