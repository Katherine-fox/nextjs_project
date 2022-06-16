import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Layout.module.scss'
import mypic from '../styles/images/me.png'


export default function Home() {
  return (
    <>
      <Head>
        <title>CV Next App</title>
        <meta name="description" content="Kate's Website" />
        <link rel="icon" href="/icon.ico" />
      </Head>
      <div className={styles.container, styles.flex, styles.flex_all_center, styles.flex_column}>         
        <h1 className={styles.h1_home }>Hello, my name is Katherine </h1>
        <p className="small-text">I am full stack web developer based in Haifa, Israel, and I'm very passionate and dedicated to my work. As developer, I have acquired the skills necessary to build great and premium websites. </p>
        <a href="#" className={styles.btn_primary}> download cv </a>   
      </div>
    </>
  )
}
