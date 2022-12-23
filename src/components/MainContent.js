import React from "react"

export default function MainContent() {
    return (
        <div className = "main-content">
            <h1 className = "main-title">Fun Facts about React</h1>
            <div className = "main-list-div">
                    <ul className = "main-list">
                        <li>Was first released in 2013</li>
                        <li className = "main-list-padding">Was originally created by Jordan Walke</li>
                        <li className = "main-list-padding">Has well over 100K stars on GitHub</li>
                        <li className = "main-list-padding">Is maintained by Facebook</li>
                        <li className = "main-list-padding">Powers thousands of enterprise apps, including mobile apps</li>
                    </ul>
            </div>
        </div>
    )
}