import styles from "../styles/Team.module.css";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { GenericHead } from "../components/GenericHead";
import { Spotlights } from "../components/Spotlights/Spotlights";
import { Team } from "../components/Team/Team";

export default function TeamPage() {
  return (
    <div className={styles.container}>
      <GenericHead />

      <Header />

      <Spotlights />

      <main className={styles.main}>
        <Team />
      </main>

      <Footer />
    </div>
  );
}
