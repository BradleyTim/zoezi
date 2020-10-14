import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Zoezi</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Zoezi!
        </h1>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://twitter.com/geschenk__"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Bradley
        </a>
      </footer>
    </div>
  )
}
