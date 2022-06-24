import React from "react";

export default function Card() {
    return(
        <div className="card">
            <img src="../images/swim.png" alt="" className="card--img"/>
            <div className="card-stats">
                <img src="../images/star.png" alt="" className="card--star" />
                <span>5.0</span>
                <span className="gray">(6)</span>
                <span className="gray">USA</span>
            </div>
            <p>Life lessons with K.</p>
            <p><span className="bold">From $137</span> / person</p>
            
        </div>
    )
}