import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import About from "./components/About";
import Navbar from "./components/Navbar";
import BlogPage from "./components/pages/BlogPage";
import ContactPage from "./components/pages/ContactPage";
import HomePage from "./components/pages/HomePage";
import SkillsPage from "./components/pages/SkillsPage";
import WorkPage from "./components/pages/WorkPage";
import Portfolio from "./components/Portfolio";
import LightRope from "./components/LightRope";

function App() {
    const snow = [];

    for (let i = 0; i < 50; i++) {
        snow.push(<div key={i} className="snowflake"></div>);
    }

    return (
        <div className="App">
            <BrowserRouter>
                <LightRope />
                {snow}
                <Navbar />
                <main>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/work" element={<WorkPage />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/portfolio" element={<Portfolio />} />
                        <Route path="/blog" element={<BlogPage />} />
                        <Route path="/skills" element={<SkillsPage />} />
                        <Route path="/contact" element={<ContactPage />} />
                    </Routes>
                </main>
            </BrowserRouter>
        </div>
    );
}

export default App;
