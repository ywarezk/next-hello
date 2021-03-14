import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home( {time} ) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>hello world {time}</h1>
      </main>
    </div>
  )
}


export async function getStaticProps() {
  return {
    props: {
      time: (new Date().toISOString())
    },
    revalidate: 120
  }
}
