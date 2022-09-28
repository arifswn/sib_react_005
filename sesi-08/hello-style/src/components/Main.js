import React from "react"
import External from "./External"
import ExternalCssModule from "./ExternalCssModule"
import ExternalObjectVariable from "./ExternalObjectVariable"
import InlineCss from "./InlineCss"
import ObjectVariabelCss from "./ObjectVariabelCss"
import StyledComponent from "./StyledComponent"

const Main = () => {
  return (
    <div>
      <p>Belajar Styling Component</p>
      <InlineCss />
      <ObjectVariabelCss />
      <External />
      <ExternalCssModule />
      <ExternalObjectVariable />
      <StyledComponent />
    </div>
  )
}

export default Main
