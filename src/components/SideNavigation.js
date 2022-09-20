import React from "react";

export function SideNavigation () {

    const clickNav = (e) => {
        let currentEle = document.getElementsByClassName("selected")[0];
        let targetEle = e.target;
        currentEle.classList.remove("selected");
        targetEle.classList.add("selected");

    }
    return(
        <div className="side-navigation">
            <h3 style={{textAlign: "center"}}>Graph Container</h3>
            <ul className="side-nav-ul">
                <li onClick={clickNav} className="side-nav-li selected">OverView</li>
                <li onClick={clickNav} className="side-nav-li">Metrics</li>
                <li onClick={clickNav} className="side-nav-li">Projects</li>
                <li onClick={clickNav} className="side-nav-li">Alerts</li>
            </ul>
            <div className="logout">
                Log out
            </div>
        </div>
    );
};