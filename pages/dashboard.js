import Head from 'next/head'
import styles from '../styles/Home.module.css'
import UploadForm from '../components/UploadForm'
import ImageGrid from '../components/ImageGrid'

export default function Contact() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Dashboard | Zoezi</title>
        <meta name="robots" content="index, follow" />
        <meta name="description" content="Loose weight and have your fitness journey with us."></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Zoezi Admin Dashboard
        </h1>
        <UploadForm/>
        <ImageGrid/>
      </main>

    </div>
  )
}
