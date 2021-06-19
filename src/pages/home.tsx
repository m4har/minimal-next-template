import protectHOC from "@hoc/proteced-route";
import useAuth from "@stores/auth-persist";
import Button from "@components/button";
import Seo from "@components/seo";

function Home(): JSX.Element {
  const { onLogout } = useAuth((state) => state);

  return (
    <div>
      <Seo title="Home" />
      <main className="h-screen flex items-center justify-center flex-col">
        <h1>HOME</h1>
        <Button label="LOGOUT" onClick={onLogout} />
      </main>
    </div>
  );
}

export default protectHOC(Home);
