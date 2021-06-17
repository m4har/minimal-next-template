import Head from "next/head";
import { useCallback } from "react";
import Button from "@components/button";
import Input from "@components/input";
import Seo from "@components/seo";
import useAuth from "@stores/auth-persist";
import protectHOC from "@hoc/proteced-route";

function Login() {
  const { loading, onLogin } = useAuth((state) => state);

  const onSubmit = useCallback((e) => {
    e.preventDefault();

    const email = e.target[0].value;
    const password = e.target[1].value;

    onLogin({ email, password });
  }, []);

  return (
    <div className="bg-gray-50 h-screen flex items-center justify-center">
      <Seo title="Login" desc="halaman login" />
      <main className="bg-gray-100 px-20 py-4 rounded border-2">
        <form onSubmit={onSubmit}>
          <Input
            defaultValue="eve.holt@reqres.in"
            label="Email"
            placeholder="Input your email..."
            required
          />
          <Input
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
