import React from "react";
import About from "./About";
import Blog from "./Blog";
import Contact from "./Contact";
import Header from "./Header";
import Portfolio from "./Portfolio";

function Main() {
    return (
        <>
            
            <div className="tags">
                <span className="tag">{"<html>"}</span>
                <span className="tag margin-left">{"<body>"}</span>
            </div>
            <Header />
            <Portfolio />
            <About />
            <Blog />
            <Contact />
            <div className="tags">
                <span className="tag margin-left">{"</body>"}</span>
                <span className="tag">{"</html>"}</span>
            </div>
        </>
    );
}

export default Main;
