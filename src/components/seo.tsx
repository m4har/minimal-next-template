import Head from "next/head";

interface Props {
  title?: string;
  desc?: string;
  icon?: string;
}
function Seo(props: Props): JSX.Element {
  const { title, desc, icon } = props;
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={desc} />
      <link rel="icon" href={icon} />
    </Head>
  );
}

Seo.defaultProps = {
  title: "",
  desc: "",
  icon: "/favicon.ico",
};

export default Seo;
