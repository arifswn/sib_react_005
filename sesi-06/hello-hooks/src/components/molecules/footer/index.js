import React from "react"
import "./footer.scss"
import { ICFacebook, ICInstagram, ICLinkedIn, ICCode } from "../../../assets"

export const Icon = ({ img }) => {
  return (
    <div className="icon-wrapper">
      <img className="icon-medsos" src={img} alt="icon" />
    </div>
  )
}

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="logo-wrapper">
          <img className="logo" src={ICCode} alt="logo" />
          <span>QTemu</span>
        </div>
        <div className="social-wrapper">
          <Icon img={ICFacebook} />
          <Icon img={ICInstagram} />
          <Icon img={ICLinkedIn} />
        </div>
      </div>
      <div className="copyright">
        <p>Copyright 2022</p>
      </div>
    </div>
  )
}

export default Footer
