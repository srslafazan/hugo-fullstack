import Head from "next/head";
import pkg from "../package.json";

export const GenericHead = () => (
  <Head>
    <title>{pkg.company.name}</title>
    <meta name="description" content={pkg.description} />
    <link rel="icon" href="/favicon.ico" />
  </Head>
);
