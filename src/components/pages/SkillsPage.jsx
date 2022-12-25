import React from "react";
import { Link } from "react-router-dom";
import Progress from "../Progress";
import "./style/skillsPage.scss";

function SkillsPage() {
    return (
        <div className="skills__wrapper-page">
            <div className="tags">
                <span className="tag">{"<html>"}</span>
                <span className="tag margin-left">{"<body>"}</span>
            </div>
            <div className="skills-page">
                <div className="skills-left-page">
                    <div className="skills-header-page">
                        <h2>Skills</h2>
                    </div>
                    <div className="skills-text-page">
                        <p>
                            С тех пор как я начал свой путь в Front-end
                            разработке 3 года назад в колледже, я выполнял
                            удаленную работу для агенств, работал со стартапами
                            и сотрудничал с талантливыми людьми для создания веб
                            продуктов как для бизнеса, так и для
                            потребительского использования. Я создаю{" "}
                        </p>
                        <p>
                            адаптивные веб-сайты, быстрые, простые в
                            использовании и созданные с использованием front-end
                            стека. Основная область моих знаний - разработка
                            интерфейса, HTML, CSS, JS, создание малых и средних
                            веб-приложений.
                        </p>
                        <p>
                            <Link to="/contact">
                                Если хотите узнать подробнее, свяжитесь со мной.
                            </Link>
                            
                        </p>
                    </div>
                </div>
                <div className="skills-right-page">
                    <div className="skills-progress-page">
                        <Progress title="ReactJS" value={85} color="#08FDD8" />
                        <Progress title="Redux" value={75} color="#D26CD5" />
                        <Progress title="Sass" value={95} color="#FF2253" />
                        <Progress title="WebPack" value={60} color="#E4EE89" />
                    </div>
                </div>
            </div>
            <div className="tags">
                <span className="tag margin-left">{"</body>"}</span>
                <span className="tag">{"</html>"}</span>
            </div>
        </div>
    );
}

export default SkillsPage;
