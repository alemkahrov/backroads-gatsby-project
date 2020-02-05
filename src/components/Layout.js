import React from 'react'
import Navbar from "./Navbar"
import Footer from "./Footer"
import "./layout.css"
import "../sass/main.scss"

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}
