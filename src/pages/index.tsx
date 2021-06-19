import { useCallback } from "react";
import { useForm } from "react-hook-form";
import Button from "@components/button";
import Input from "@components/input";
import Seo from "@components/seo";
import useAuth from "@stores/auth-persist";
import protectHOC from "@hoc/proteced-route";

function Login(): JSX.Element {
  const { loading, onLogin } = useAuth((state) => state);

  const { register, handleSubmit } = useForm();

  const onSubmit = useCallback((e) => {
    onLogin(e);
  }, []);

  return (
    <div className="bg-gray-50 h-screen flex items-center justify-center">
      <Seo title="Login" desc="halaman login" />
      <main className="bg-gray-100 px-20 py-4 rounded border-2">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            {...register("email")}
            data-testid="email"
            defaultValue="eve.holt@reqres.in"
            label="Email"
            placeholder="Input your email..."
            required
          />
          <Input
            {...register("password")}
            data-testid="password"
            defaultValue="cityslicka"
            label="Password"
            placeholder="Input your password..."
            type="password"
            required
          />
          <Button type="submit" label="login" loading={loading} />
        </form>
      </main>
    </div>
  );
}

export default protectHOC(Login);
