import React from 'react'

import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


const Navbar = () => {
    return (
        <nav className="navbar">
            <h1 className="navbar-logo">HEY</h1>
            <div className="navbar-menu">
                    <Link
                        activeClass="active-link"
                        className="nav-link"
                        to="section2"
                        spy={true}
                        offset={-40}
                        smooth={true}
                        duration={500}
                    ><p>Section 2</p></Link>
                    <Link
                        activeClass="active-link"
                        className="nav-link"
                        to="section3"
                        spy={true}
                        offset={-40}
                        smooth={true}
                        duration={500}
                    ><p>Section 3</p></Link>
                    <Link
                        activeClass="active-link"
                        className="nav-link-contact nav-link"
                        to=""
                        spy={true}
                        smooth={true}
                        duration={500}
                    ><p>Request A Quote</p></Link>
            </div>
        </nav>
    )
}

export default Navbar
