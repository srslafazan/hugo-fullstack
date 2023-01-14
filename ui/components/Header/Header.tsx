import Link from "next/link";
import { useContext } from "react";
import { useRouter } from "next/router";
import { IoMenuSharp } from "react-icons/io5";

import { ModalContext } from "../../context/modal";
import { Logo } from "../Logo/Logo";

import styles from "./Header.module.css";

const HeaderRightMobile = () => {
  const router = useRouter();
  const modal = useContext(ModalContext);
  return (
    <div className="flex sm:hidden items-center">
      <button
        style={{
          cursor: "pointer",
          fontSize: "30px",
          borderRadius: "2px",
          padding: "1px 2px",
          margin: "0 0 0 6px",
        }}
      >
        <IoMenuSharp
          className="menu-mobile"
          onClick={() =>
            modal.update({
              type: "any",
              content: (
                // eslint-disable-next-line jsx-a11y/no-static-element-interactions
                <div
                  onClick={modal.close}
                  onKeyDown={() => {}}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100vh",
                    width: "100vw",
                    fontSize: "20px",
                    background: "rgba(255,255,255, 0.5)",
                    backgroundColor: "rgba(255,255,255, 0.5)",
                  }}
                  className="space-y-4"
                >
                  <Link
                    href="/"
                    className={
                      router.pathname === "/" ? "font-bold text-gradient" : ""
                    }
                    style={{
                      marginRight: "20px",
                    }}
                  >
                    Home
                  </Link>
                  <Link
                    href="/team"
                    className={
                      router.pathname === "/team"
                        ? "font-bold text-gradient"
                        : ""
                    }
                    style={{
                      marginRight: "20px",
                    }}
                  >
                    Team
                  </Link>
                  <Link
                    href="/contact"
                    className={
                      router.pathname === "/contact"
                        ? "font-bold text-gradient"
                        : ""
                    }
                    style={{
                      marginRight: "20px",
                    }}
                  >
                    Contact
                  </Link>
                </div>
              ),
            })
          }
        />
      </button>
    </div>
  );
};

const HeaderRightDesktop = () => {
  const router = useRouter();
  return (
    <div className="items-center hidden sm:flex">
      <Link
        href="/"
        className={router.pathname === "/" ? "text-gradient" : ""}
        style={{
          fontWeight: "500",
          marginRight: "20px",
        }}
      >
        Home
      </Link>
      <Link
        href="/team"
        className={router.pathname === "/team" ? "text-gradient" : ""}
        style={{
          fontWeight: "500",
          marginRight: "20px",
        }}
      >
        Team
      </Link>
      <Link
        href="/contact"
        className={router.pathname === "/contact" ? "text-gradient" : ""}
        style={{
          fontWeight: "500",
          marginRight: "20px",
        }}
      >
        Contact
      </Link>
    </div>
  );
};

export const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <HeaderRightMobile />
      <HeaderRightDesktop />
    </header>
  );
};
