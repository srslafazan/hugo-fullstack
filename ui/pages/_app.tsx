import "../styles/globals.css";
import "../styles/Modal.css";
import type { AppProps } from "next/app";
import { useState } from "react";

import { AiOutlineClose } from "react-icons/ai";
import { ModalContext } from "../context/modal";
import Script from "next/script";

const Modal = ({ visible = false, close = () => {}, children = [] }: any) => {
  if (!visible) return null;

  return (
    <div className="modal">
      <AiOutlineClose className="menu-close" onClick={close} style={{}} />
      {children}
    </div>
  );
};

export default function App({ Component, pageProps }: AppProps) {
  const [modalContext, setModalContext] = useState({
    content: null,
    update: () => {},
  });
  return (
    <>
      <ModalContext.Provider
        value={{
          ...modalContext,
          update: setModalContext,
          close: () => setModalContext({ ...modalContext, content: null }),
        }}
      >
        <Modal
          visible={!!modalContext.content}
          close={() => {
            setModalContext({ ...modalContext, content: null });
          }}
        >
          {modalContext.content}
        </Modal>
        <Component {...pageProps} />
      </ModalContext.Provider>
      {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'GA_MEASUREMENT_ID');
        `}
      </Script>
    </>
  );
}
