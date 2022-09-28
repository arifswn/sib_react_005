import { useState, useEffect } from "react"
import { Link, Redirect, useLocation } from "react-router-dom"
import { Nav, Navbar, Container } from "react-bootstrap"
import Button from "../components/utils/Button/Button"

export const menuItems = [
  {
    title: "QTemu",
    url: "/",
  },
  {
    title: "Create MeetUp",
    url: "/create-meetup",
  },
  {
    title: "Explore",
    url: "/explore",
  },
  {
    title: "Logout",
    url: "/logout",
  },
]

const Navigation = () => {
  const [isRedirect, setRedirect] = useState()

  const handleSubmit = (e) => {
    e.preventDefault()
    localStorage.removeItem("authenticated")
    localStorage.clear()
    setRedirect(true)
  }

  const renderNav = (
    <Navbar collapseOnSelect variant="dark" bg="dark" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="container-fluid">
            {menuItems.map((menu, index) => {
              if (menu.url === "/logout") {
                return (
                  <Button
                    key={index}
                    onClick={handleSubmit}
                    type="button"
                    className="login-right btn btn-info px-3 d-flex flex-row align-items-center"
                  >
                    <div className="mr-3">{menu.title}</div>
                    {<i className="fas fa-sign-out-alt"></i>}
                  </Button>
                )
              } else {
                return (
                  <CusotmLink key={index} to={menu.url}>
                    {menu.title}
                  </CusotmLink>
                )
              }
            })}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )

  return <>{isRedirect ? <Redirect to="/login" /> : renderNav}</>
}

function CusotmLink({ to, children, ...props }) {
  const location = useLocation() // once ready it returns the 'window.location' object

  //useState adalah sebuah Hook, dan akan mengembalikan nilai dari state (contoh url)
  const [url, setUrl] = useState(null)
  const isActive = url === to ? " active" : ""

  //useEffect adalah sebuah effect hook yang dapat melakukan side effect/efek samping (contoh set url tetap active saat reload)
  useEffect(() => {
    setUrl(location.pathname)
  }, [location])
  // [location] << base on data contoh (location) > cek jika ada perubahan data pada location
  // [] << jika kosong (saat render pertama x baru terpanggil), tidak berpengaruh terhadap function component
  // jika tidak menggunakan [] << maka perubahan apapun yang terjadi pada function componenet,
  // console.log (function code dalam useEffect) akan terpanggil (loop)

  return (
    <Nav.Link as={Link} to={to} className={isActive} {...props}>
      {children}
    </Nav.Link>
  )
}

export default Navigation
