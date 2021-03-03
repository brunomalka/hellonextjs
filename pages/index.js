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

          <a target="_blank" href="https://www.amazon.com.br/b?_encoding=UTF8&tag=brunoazevedo-20&linkCode=ur2&linkId=b3b36353e34050c49cb3fb43cc73813b&camp=1789&creative=9325&node=16339933011"
             className={styles.card}
            >Informatica Special Features Stores
            </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by {' '}
          <span className={styles.code}>Bruno Azevedo</span>
        </a>
      </footer>
    </div>
  )
}
