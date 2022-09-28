import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./pages/App"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  //mode ketat
  //pemeriksaan dan peringatan ekstra untu turunan
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
