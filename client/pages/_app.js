import Layout from '../components/Layout'
import Head from 'next/head';
import header_style from '../styles/Header.module.scss'
import '../styles/globals.scss'
import Link from 'next/link';
import Particles from "react-tsparticles";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {

  const router = useRouter();
  

  const particlesInit = (main) => {
    //console.log(main);
  };

  const particlesLoaded = (container) => {
    //console.log(container);
  };

  return (
    <Layout>
      <Head>
        <title>Kate's Next App</title>
        <meta name="description" content="Kate's Website" />
        <link rel="icon" href="/icon.ico" />
      </Head>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "#F6F1F8",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "repulse",
              },
              onHover: {
                enable: true,
                mode: "grab",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            number: {
              value: 135,
              density: {
                enable: true,
                value_area: 800
              }
            },
            color: {
              value: "#cdb4db"
            },
            shape: {
              type: "circle",
              stroke: {
                width: 0,
                color: "#000000"
              },
              polygon: {
                nb_sides: 6
              },
              image: {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
              }
            },
            opacity: {
              value: 0.7528130380811275,
              random: false,
              anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false
              }
            },
            size: {
              value: 2,
              random: true,
              anim: {
                enable: false,
                speed: 1,
                size_min: 0.1,
                sync: false
              }
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: "#cdb4db",
              opacity: 0.4,
              width: 1
            },
            move: {
              enable: true,
              speed: 1,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
              }
            }
          },
          detectRetina: true,
        }}
      />
      {console.log(router)}
      <section className={header_style.header}>
          <div className={header_style.wrapper}> 
            <Link href="/" >
              <a className={router.asPath==="/" ? header_style.nav_link_active : header_style.nav_link}>Home</a>
            </Link>
            <Link href="/about">
              <a className={router.asPath==="/about" ? header_style.nav_link_active : header_style.nav_link}>About</a>
            </Link>
            <Link href="/pure_css">
              <a className={router.asPath==="/pure_css" ? header_style.nav_link_active : header_style.nav_link}>Pure Css</a>
            </Link>
          </div>
      </section>
      <Component {...pageProps} />
    
    </Layout>
  )
}

export default MyApp
