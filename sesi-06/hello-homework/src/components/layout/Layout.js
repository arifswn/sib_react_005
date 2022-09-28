import Navigation from "../Navigation"
import Footer from "../Footer"

const Layout = (props) => {
  return (
    <>
      <Navigation />
      <props.children />
      <Footer />
    </>
  )
}

export default Layout
