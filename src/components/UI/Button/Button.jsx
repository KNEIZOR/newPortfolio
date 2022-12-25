import React from "react";
import cl from "./Button.module.scss";

function Button({ children, ...props }) {
    return (
        <div {...props} className={cl.buttonWrapper}>
            <div className={cl.buttonText}>{children}</div>
            <div className={cl.buttonInner}></div>
        </div>
    );
}

export default Button;
