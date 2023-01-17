import Head from "next/head";
import pkg from "../package.json";

export const GenericHead = () => (
  <Head>
    <title>{pkg.company.name}</title>
    <meta name="description" content={pkg.description} />
    <link
      rel="icon"
      href="https://www.withhugo.com/assets/images/favicon/favicon.ico?v=2"
    />
  </Head>
);
