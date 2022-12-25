import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import observer from "../hooks/observer";
import "../style/portfolio.scss";
import Jobs from "./Jobs";
import Button from "./UI/Button/Button";

function Portfolio() {
    const router = useNavigate()
    const target = useRef(null)

    useEffect(() => {
        observer(target, "0px 0px -30px 0px")
    }, [])

    return (
        <div className="portfolio">
            <div className="portfolio__wrapper" ref={target}>
                <h2 className="background-text">Work</h2>
                <div className="portfolio-title">
                    <h2>Мое портфолио</h2>
                    <Button onClick={() => router("/work")}>Все работы</Button>
                </div>
                <Jobs />
            </div>
        </div>
    );
}

export default Portfolio;
