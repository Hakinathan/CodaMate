"use client";
import styles from "./styles/Error.module.css";

function ErrorPage({ _, reset }) {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Une erreur est survenue</h1>
      <p className={styles.description}>
        Il semble qu&apos;il y a une erreur 😅
      </p>
      <button className={styles.button} onClick={() => reset()}>
        Réessayer
      </button>
    </main>
  );
}

export default ErrorPage;
