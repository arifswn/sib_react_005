import Link from "next/link"
import navStyle from "../styles/Nav.module.css"

const Nav = () => {
  return (
    <nav className={navStyle.nav}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/users/users-nossr">Users No SSR</Link>
        </li>
        <li>
          <Link href="/users/users-ssr">Users With SSR</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
