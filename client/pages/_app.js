import Layout from '../components/Layout'
import Head from 'next/head';
import header_style from '../styles/Header.module.scss'
import '../styles/globals.scss'
import Link from 'next/link'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Kate's Website" />
        <link rel="icon" href="/icon.ico" />
      </Head>
      <section className={header_style.header}>
          <div className={header_style.wrapper}> 
            <Link href="/">
              <a className={header_style.nav_link}>Home</a>
            </Link>
            <Link href="/about">
              <a className={header_style.nav_link}>About</a>
            </Link>
            <Link href="/">
              <a className={header_style.nav_link}>Pure Css</a>
            </Link>
          </div>
      </section>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
