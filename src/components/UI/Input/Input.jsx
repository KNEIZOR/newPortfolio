import React from "react";
import cl from "./Input.module.scss"

function Input({type="text", placeholder="", ...props}) {
    return <input {...props} className={cl.myInput} type={type} placeholder={placeholder}/>
}

export default Input