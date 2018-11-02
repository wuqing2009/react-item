import React from 'react'
import './shopList.css';
import {Link} from 'react-router-dom';
import { money } from '../api/money';
function ShopList({shop}) {
    return (
        <div className="shop-list">
            <div className="product">
                <Link to={{pathname:"/detail/"+shop.goods}}>
                    <img src={shop.url} alt=""/>
                    <p className="jieshao">{shop.title}</p>
                    <p className="jiage">{money(shop.price)} <span>省{money(shop.prc-shop.price)}</span></p>
                </Link>
            </div>
        </div>

    )

}
export default ShopList 