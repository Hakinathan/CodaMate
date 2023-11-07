import Link from "next/link";
import styles from "./styles/Error.module.css";

function NotFound() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>404</h1>
      <p className={styles.description}>
        Ce site ne possède qu&apos;une seule et unique page. Je vous invite à
        retourner à l&apos;accueil 👀
      </p>
      <Link href="/" className={styles.link}>
        Retour à l&apos;accueil
      </Link>
    </main>
  );
}

export default NotFound;
