import styles from "./Footer.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import pkg from "../../package.json";

export const Footer = () => {
  const router = useRouter();
  return (
    <footer className={styles.footer} style={{ flexDirection: "column" }}>
      <div>
        <div>
          &copy; {new Date().getFullYear()}{" "}
          <a href={pkg.company.website}>{pkg.company.name}</a>
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <Link
          href="/terms-of-service"
          className={
            router.pathname === "/terms-of-service" ? "text-gradient" : ""
          }
        >
          Terms of Service
        </Link>
        <span style={{ margin: "0 8px" }}>|</span>
        <Link
          href="/privacy-policy"
          className={
            router.pathname === "/privacy-policy" ? "text-gradient" : ""
          }
        >
          Privacy Policy
        </Link>
      </div>
    </footer>
  );
};
