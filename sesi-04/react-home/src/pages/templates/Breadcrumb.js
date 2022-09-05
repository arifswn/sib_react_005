import Breadcrumb from "react-bootstrap/Breadcrumb"

function NavBread({ title }) {
  return (
    <div style={{ display: "block", width: 700, padding: 10 }}>
      <Breadcrumb>
        <Breadcrumb.Item active>React</Breadcrumb.Item>
        <Breadcrumb.Item active>{title}</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  )
}

export default NavBread
