import React from "react"

import "./index.css"
import Header from "./components/Header.js"
import Footer from "./components/Footer.js"
import MainContent from "./components/MainContent.js"

export default function App() {
    return (
        <div className = "page">
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}