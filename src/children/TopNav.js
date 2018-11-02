import React from 'react'
import './topNav.css';
function TopNav({active,up,change}) {
    return (
        <div className="top-nav">
        <a href="javascript:void(0)" className={active===1?"p_order active":"p_order"} onClick={change.bind(null,1,up)}>综合</a>
        <a href="javascript:void(0)" className={active===2?"uptime active":"uptime"} onClick={change.bind(null,2,up)}>新品</a>
        <a href="javascript:void(0)" className={active===3?"price active":"price"} onClick={change.bind(null,3,!up)}>
            <div className="sort">
                <div className={up ?"sort_up active1":"sort_up"}></div>
                <div className={up ?"sort_down ":"sort_down active2"}></div>
            </div>
            价格
        </a>
        <a href="javascript:void(0)" className={active===4?"filter active":"filter"} onClick={change.bind(null,4,up)} >热卖</a>
    </div>
    )

}
export default TopNav 
