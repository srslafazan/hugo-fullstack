import React from "react";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { Spotlights } from "../components/Spotlights/Spotlights";
import { GenericHead } from "../components/GenericHead";
import styles from "../styles/Home.module.css";
import { Application } from "../components/Application";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const [application, setApplication] = React.useState({});
  return (
    <div className={styles.container}>
      <GenericHead />

      <Header />
      <Spotlights />

      <main className={styles.main}>
        <button
          onClick={async () => {
            const response = await await fetch(
              "http://localhost:3000/applications",
              {
                method: "post",
              }
            ).then((r) => r.json());
            console.log("response", response);
            router.push(`/applications/${response.application.id}/edit`);
          }}
        >
          Create Application
        </button>
      </main>
      <Footer />
    </div>
  );
}
