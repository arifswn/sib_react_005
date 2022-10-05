import React from "react"

const Header = () => {
  return (
    <div>
      <nav className="py-2 bg-light border-bottom">
        <div className="container d-flex flex-wrap">
          <ul className="nav me-auto">
            <li className="nav-item">
              <a
                href="/"
                className="nav-link link-dark px-2 active"
                aria-current="page"
              >
                <h5>Testing Example</h5>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Header
