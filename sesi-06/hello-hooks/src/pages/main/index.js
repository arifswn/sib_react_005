import React from "react"
import { Routes, Route } from "react-router-dom"
import { Header, Footer } from "../../components"
import { CreateBlog, DetailBlog } from "../blog"
import Home from "../home"

import "./main.scss"

const Main = () => {
  return (
    <div>
      <div className="main-app-wrapper">
        <Header />
        <div className="content-wrapper">
          <Routes>
            <Route path="create-blog" element={<CreateBlog />}></Route>
            <Route path="detail-blog" element={<DetailBlog />}></Route>
            <Route path="/" element={<Home />}></Route>
          </Routes>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Main
