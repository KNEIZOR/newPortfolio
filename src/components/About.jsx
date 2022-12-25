import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import observer from "../hooks/observer";
import "../style/about.scss";

function About() {
    const target = useRef(null)

    useEffect(() => {
        observer(target, "0px 0px -30px 0px")
    }, [])

    return (
        <div className="about__wrapper">
            <div className="about" ref={target}>
                <div className="about-header">
                    <h2>Обо мне</h2>
                </div>
                <div className="about-text">
                    <p>
                        <li>
                            Я Front-end разработчик из Светлограда
                            (Ставропольский край). У меня большая страсть к
                            созданию UI, анимации и созданию интуитивно
                            понятного, динамичного пользовательского интерфейса.
                        </li>
                        <li>
                            Хорошо организованный человек, решающий проблемы,
                            независимый сотрудник с большим вниманием к деталям.
                            Фанат ММА, активного отдыха, сериалов и технической
                            литературы.
                        </li>
                        <li>
                            Интерисуюсь всем спектром Front-end разроботки и
                            работаю над амбициозными проектами с позитивными
                            людьми.
                        </li>
                    </p>
                        <Link className="about-link" to={"/contact"}>
                            Давайте сделаем что-то интересное
                        </Link>

                </div>
            </div>
            <svg width="400" height="600" viewBox="-100 -100 200 200">
                <polygon points="0,0 80,120 -80,120" fill="#234236" />
                <polygon points="0,-40 60,60 -60,60" fill="#0C5C4C" />
                <polygon points="0,-80 40,0 -40,0" fill="#38755B" />
                <rect x="-20" y="120" width="40" height="30" fill="brown" />
            </svg>
        </div>
    );
}

export default About;
