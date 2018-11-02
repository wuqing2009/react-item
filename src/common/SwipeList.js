import React from 'react'
import './swipeList.css';
import {Link} from 'react-router-dom';
import { money } from '../api/money';
function SwipeList({list1}) {
    return (
        <div className="hot_sale_show" >
        {
            list1.map(val=>(
                <div className="hot_product" key={val.goods}>
                <Link to={{pathname:"/detail/"+val.goods}}>
                <img src={val.url} alt=""/>
                <p className="introduce">{val.title}</p>
                <p className="price">优惠价：{money(val.price)}</p>
                </Link>
                </div>
            ))
        }
        </div>
    )
}
export default SwipeList 
