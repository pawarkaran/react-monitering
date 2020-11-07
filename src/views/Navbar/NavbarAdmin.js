import { CButton, CCollapse, CImg, CLink, CNavbar, CNavbarBrand, CNavbarNav, CNavLink } from '@coreui/react'
import React, { useState } from 'react'

const NavbarAdmin = () => {

    const [isOpen, setIsOpen] = useState(false);

    const smoothScrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    const smoothScrollBottom = () => {
        window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
    }


    return (
        <div>
            <div class="sticky-top">
                <CNavbar expandable="lg" color="white" className="shadow" >
                    <button inNavbar onClick={() => setIsOpen(!isOpen)} color="black" class="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="icon-bar" >

                            <div class="icon-bar" />
                            <div class="icon-bar" />
                            <div class="icon-bar" />
                        </span>
                    </button>
                    <CNavbarBrand className="">
                        <a href="/"
                            className="text-decoration-none">
                            <CImg
                                src={process.env.PUBLIC_URL + "/images/logs.png"}

                                height="60px"
                                className="navbar-logo-img"
                            />
                        </a>
                    </CNavbarBrand>
                    <CCollapse show={isOpen} navbar class="collapse navbar-collapse" id="navbarTogglerDemo03">
                        <CNavbarNav className=" navbar-links">
                            <CNavLink to="/" onClick={smoothScrollTop}><span className="navbar-links-text">HOME</span></CNavLink>
                            <CNavLink onClick={smoothScrollBottom}><span className="navbar-links-text">CONTACT US</span></CNavLink>

                        </CNavbarNav>
                        <CNavbarNav className="buttons-navbar topnav-right ">
                            <CLink href="/#/admin/admin-login" onClick={smoothScrollTop}>
                                <CButton inline variant="outline" className="navbar-button-marging1">
                                    <span className="button-text">Log In</span>
                                </CButton>
                            </CLink>
                            <CLink href="/#/admin/admin-register" onClick={smoothScrollTop}>
                                <CButton variant="primary" className="navbar-button navbar-button-marging2">
                                    <span className="button-text text-white">Sign Up</span>
                                </CButton>
                            </CLink>

                        </CNavbarNav>
                    </CCollapse>
                </CNavbar>
            </div>
        </div>
    )
}

export default NavbarAdmin
