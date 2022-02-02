import styles from '../styles/Layout.module.scss'

function Layout({children}) {
  return <>
      <main>
        {children}
      </main>
    </>;
}

export default Layout;