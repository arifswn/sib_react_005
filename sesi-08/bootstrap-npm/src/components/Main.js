import React from "react"
import { Content, Footer, Header } from "./template"

const Main = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <Content />
      </div>
      <Footer />
    </div>
  )
}

export default Main
