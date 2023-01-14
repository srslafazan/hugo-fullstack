import styles from "./Spotlights.module.scss";

export const Spotlights = () => {
  return (
    <>
      <div
        className={styles.spotlightGradient1}
        style={{
          transform: "translate(-50%, 80%)",
          left: 0,
          position: "fixed",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          zIndex: -1,
        }}
      />
      <div
        className={styles.spotlightGradient2}
        style={{
          transform: "translate(50%, -15%)",
          right: 0,
          position: "fixed",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          zIndex: -1,
        }}
      />
    </>
  );
};
