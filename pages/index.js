import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Bruno Azevedo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Bruno Azevedo
        </h1>

        <div className={styles.grid}>
          <a href="#"
             className={styles.card}
          >
            <h3>Ofertas Limpas &rarr;</h3>
            <p>Grade com ofertas de afiliados, de forma limpa e organizada.</p>
          </a>

          <a href="http://instagram.com/brunomalka"
             className={styles.card}
          >
            <h3>Instagram &rarr;</h3>
            <p>Fotos do Instagram.</p>
          </a>

          <a href="https://www.linkedin.com/in/bruno-azevedo-b9010759/"
             className={styles.card}
          >
            <h3>LinkedIN &rarr;</h3>
            <p>Considere meu currículo</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Bruno Azevedo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
