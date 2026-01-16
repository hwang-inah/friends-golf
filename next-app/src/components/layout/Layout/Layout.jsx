import React from 'react'
import { Outlet } from 'react-router-dom'
import styles from './Layout.module.css'
import Header from '../Header/Header.jsx'
import Footer from '../Footer/Footer.jsx'
import FloatingButtons from '../../molecules/FloatingButtons/FloatingButtons.jsx'

const Layout = () => {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  )
}

export default Layout