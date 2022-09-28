import { Link, Outlet } from "react-router-dom"

const About = () => {
    return (
        <>
            <h1>About Us</h1>
            <p>This is my About Us page</p>
            <br />
            <Link to="about-company">About The Company</Link> | {" "}
            <Link to="about-me">About Me</Link>
            <Outlet />
        </>
    )
}

export default About