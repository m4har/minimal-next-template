import { useEffect, useMemo, useState, ComponentType } from "react";
import useAuth from "@stores/auth-persist";
import { useRouter } from "next/router";

interface Props {}

const protectHOC =
  <P extends Props>(Component: ComponentType<P>): ComponentType<P> =>
  (props): JSX.Element => {
    const { token } = useAuth((state) => state);
    const router = useRouter();

    const [state, setState] = useState({ loading: true, isAllow: false });

    const isAuthPage = useMemo(
      () => ["/"].some((i) => i === router.pathname),
      []
    );

    useEffect(() => {
      if (token === "") {
        if (isAuthPage) {
          setState({ loading: false, isAllow: true });
        } else {
          setState({ loading: false, isAllow: false });
          setTimeout(() => {
            router.replace("/");
          }, 3000);
        }
      } else {
        if (isAuthPage) {
          router.replace("/home");
        } else {
          setState({ loading: false, isAllow: true });
        }
      }
    }, [token]);

    if (state.loading) return <div />;

    if (!state.isAllow)
      return (
        <div className="h-screen flex items-center justify-center flex-col">
          <p>Kamu harus login untuk mengakses halaman ini.</p>
          <p>Mengalihkan dalam beberapa detik...</p>
        </div>
      );

    return <Component {...props} />;
  };
export default protectHOC;
