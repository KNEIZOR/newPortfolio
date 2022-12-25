import React from "react";
import "../style/progress.scss";
import { motion } from "framer-motion";

function Progress({ value, color, title }) {
    return (
        <div className="skill-progress">
            <h2>{title}</h2>
            <div className="progress">
                <progress max={100} value={value}></progress>
                <div className="progress-value"></div>
                <div className="progress-bg">
                    <motion.div
                        className="progress-bar"
                        animate={{ width: `${value}%` }}
                        transition={{ ease: "easeInOut", duration: 2 }}
                        style={{ background: color }}
                    />
                </div>
            </div>
        </div>
    );
}

export default Progress;
