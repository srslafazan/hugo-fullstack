import React from "react";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { Spotlights } from "../components/Spotlights/Spotlights";
import { GenericHead } from "../components/GenericHead";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <GenericHead />

      <Header />
      <Spotlights />

      <main className={styles.main}>
        <button
          className="bg-green-100 hover:bg-green-200 p-4 rounded-sm"
          onClick={async () => {
            const response = await await fetch("/api/applications", {
              method: "post",
            }).then((r) => r.json());
            console.log("response", response);
            router.push({
              pathname: "/applications/[id]/edit",
              query: { id: response.application.id },
            });
          }}
        >
          Create Application
        </button>
      </main>
      <Footer />
    </div>
  );
}
