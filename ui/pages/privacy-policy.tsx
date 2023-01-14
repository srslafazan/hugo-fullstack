import styles from "../styles/Home.module.css";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { GenericHead } from "../components/GenericHead";
import { Spotlights } from "../components/Spotlights/Spotlights";
import { PrivacyPolicy } from "../components/PrivacyPolicy/PrivacyPolicy";

export default function PrivacyPolicyPage() {
  return (
    <div className={styles.container}>
      <GenericHead />

      <Header />

      <Spotlights />

      <main className={styles.main} style={{ height: "auto" }}>
        <PrivacyPolicy />
      </main>

      <Footer />
    </div>
  );
}
