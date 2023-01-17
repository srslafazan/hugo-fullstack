import React from "react";
import { useRouter } from "next/router";

import styles from "../../../styles/Home.module.css";
import { Header } from "../../../components/Header/Header";
import { Footer } from "../../../components/Footer/Footer";
import { Spotlights } from "../../../components/Spotlights/Spotlights";
import { GenericHead } from "../../../components/GenericHead";
import { Application } from "../../../components/Application";

export default function ApplicationView() {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <GenericHead />

      <Header />
      <Spotlights />

      <main className={styles.main}>
        <Application view id={router.query.id as string} />
      </main>
      <Footer />
    </div>
  );
}
