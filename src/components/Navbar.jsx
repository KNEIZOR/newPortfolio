import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../img/logo.png";
import "../style/navbar.scss";

function Navbar() {
    const router = useNavigate();
    const navbarRef = useRef(null);
    const menuRef = useRef(null);

    function navbar() {
            menuRef.current.classList.remove("block")
            navbarRef.current.classList.remove("none")

            navbarRef.current.classList.add("block")
            menuRef.current.classList.add("none")
    }

    function closeNav() {
            menuRef.current.classList.remove("none")
            navbarRef.current.classList.remove("block")

            navbarRef.current.classList.add("none")
            menuRef.current.classList.add("block")
    }

    return (
        <>
            <div className="menu" onClick={navbar} ref={menuRef}>
                <i className="fa-solid fa-list-ul"></i>
            </div>
            <div className="navbar" ref={navbarRef}>
                <div className="header-nav__wrapper">
                    <div
                        className="header-nav"
                        onClick={() => {
                            router("/");
                            closeNav();
                        }}
                    >
                        <div className="header-nav-logo">
                            <img
                                className="header-nav-logo-img"
                                src={logo}
                                alt="logo"
                            />
                        </div>
                        <div className="header-nav-title">Denis</div>
                        <div className="header-nav-text">
                            Frontend Developer
                        </div>
                    </div>
                    <button className="close" onClick={closeNav}>
                        x
                    </button>
                </div>
                <div className="nav-links">
                    <ul className="nav-ul" onClick={closeNav}>
                        <li onClick={() => router("/about")}>About</li>
                        <li onClick={() => router("/skills")}>My Skills</li>
                        <li onClick={() => router("/work")}>Work</li>
                        <li onClick={() => router("/contact")}>Contact</li>
                        <li onClick={() => router("/blog")}>Blog</li>
                    </ul>
                </div>
                <div className="nav-footer-links">
                    <ul className="nav-footer-ul">
                        <li>
                            <a
                                href="https://vk.com/kneizor"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="fa-brands fa-vk"></i>
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://github.com/KNEIZOR"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="fa-brands fa-github"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Navbar;
