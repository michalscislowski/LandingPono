import Head from 'next/head'
import Main from '../components/main'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>WieszCzemuMowiSieTuSzyfrem?</title>
        <link rel="icon" href="/biohazardbg.png" />
      </Head>
      <Main />
      
    </div>
  )
}
