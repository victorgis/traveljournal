// import React from "react"
import globe from "../globe.svg"

export default function Header() {
    return (
        <div className="App">
            <div className="globe">
                <ul className="list">
                    <li><img src={globe} alt="" /></li>
                    <li className="travel">my travel journal</li>
                </ul>
            </div>
            
        </div>
    )
}