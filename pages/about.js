import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>About | Zoezi</title>
        <meta name="robots" content="index, follow" />
        <meta name="description" content="Loose weight and have your fitness journey with us."></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          About Zoezi!
        </h1>
      </main>

    </div>
  )
}
