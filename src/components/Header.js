import React from "react"
import reactLogo from "../react_icon.png"

export default function Header() {
    return (
        <header>
            <nav className = "navbar">
                <img src = {reactLogo} className = "nav-img" alt = "react logo"/>
                <h3 className = "nav-title">ReactFacts</h3>
                <h4 className = "nav-desc">React Course - Project 1</h4>
            </nav>
        </header>
    )
}