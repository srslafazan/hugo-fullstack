import Link from "next/link";
import Image from "next/image";

import styles from "./Logo.module.css";

export const Logo = () => {
  return (
    <Link href="/" style={{ display: "flex", alignItems: "center" }}>
      <Image
        alt="logo"
        src="https://v2.stactica.com/img/StacticaLogo.png"
        height={30}
        width={238}
        style={{
          height: "30px",
          width: "238px",
          transform: "translateY(-2px)",
        }}
      />
    </Link>
  );
};

export const TextLogo = () => {
  return (
    <Link href="/" style={{ display: "flex", alignItems: "center" }}>
      <Image
        alt="logo"
        src="/logo@2x.png"
        height={50}
        width={101}
        style={{
          height: "55px",
          width: "111px",
          transform: "translateY(-2px)",
        }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          lineHeight: "24px",
        }}
      >
        <h1 className={styles.title + " text-gradient font-bold"}>Stactica</h1>
      </div>
    </Link>
  );
};
