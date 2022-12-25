import React from "react";
import "../style/header.scss";
import logo from "../img/logo.png";
import Button from "./UI/Button/Button";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import myPhoto from "../img/IMG_20221111_115439-2-2.png";

function Header() {
    const router = useNavigate();

    return (
        <motion.header
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
            }}
        >
            <div className="header__wrapper">
                <div className="header-title">
                    <div className="header-text">
                        <h1>
                            Hi,
                            <div className="phrase">
                                I’m
                                <img className="d" src={logo} alt="logo" />
                                <p>enis,</p>
                            </div>
                            Frontend developer{" "}
                        </h1>
                    </div>
                </div>
                <div className="header-buttons">
                    <Button onClick={() => router("/contact")}>
                        Contact me!
                    </Button>
                </div>
            </div>
            <div className="photo">
                <img className="myPhoto" src={myPhoto} alt="" />
            </div>
        </motion.header>
    );
}

export default Header;
