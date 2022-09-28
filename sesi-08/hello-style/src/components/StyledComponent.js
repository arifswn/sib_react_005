import React from "react"
import styled from "styled-components"

const Div = styled.div`
  background-color: #fefefe;
  padding: 30px;
  font-family: "Arial";
`

const StyledComponent = () => {
  return (
    <div>
      <Div>
        <h1>Hello Styled Components</h1>
      </Div>
    </div>
  )
}

export default StyledComponent
