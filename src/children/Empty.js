import React from 'react'
import './empty.css'
import {Link} from 'react-router-dom';

function Empty() {
    return (
        <div className="empty">
            <img src="../assets/images/kong_cart.png" alt=""/>
            <p>购物车快饿扁了T.T</p>
            <p className="sle">主人快给我挑点宝贝吧</p>
            <Link to="/prolist">去逛逛</Link>
        </div>
    )
}
export default Empty