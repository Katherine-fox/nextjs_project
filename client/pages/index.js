import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Layout.module.scss'


export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Kate's Website" />
        <link rel="icon" href="/icon.ico" />
      </Head>
      <div className={styles.container}>
          <div className={styles.text_wrapper}>
                <h1 className="small-text">Hello, my name is Kate Aharonov</h1>
                <p className="small-text">I am full stack web developer based in Haifa, Israel, and I'm very passionate and dedicated to my work. As developer, I have acquired the skills necessary to build great and premium websites. </p>
                <a href="#" className="cv-link">download cv</a>
          </div>
          <div className={styles.img_wrapper}>
              <Image
                src="/images/me.png"
                alt="Picture of the author"
                width={500}
                height={500}
              />
          </div>
      </div>
    </>
  )
}
