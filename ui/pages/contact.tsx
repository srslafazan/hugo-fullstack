import styles from "../styles/Home.module.css";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { GenericHead } from "../components/GenericHead";
import { Spotlights } from "../components/Spotlights/Spotlights";
import pkg from "../package.json";

export default function About() {
  return (
    <div className={styles.container}>
      <GenericHead />

      <Header />

      <Spotlights />

      <main className={styles.main}>
        <p className={styles.description}>
          We ❤️ to hear from you and share our products.
        </p>
        <p className={styles.description}>
          Reach out to{" "}
          <a href={`mailto:${pkg.contact.email}`}>
            👋{" "}
            <span className="text-gradient font-bold">{pkg.contact.email}</span>{" "}
            to get in touch.
          </a>
        </p>
      </main>

      <Footer />
    </div>
  );
}
