import React from 'react'
import './orderList.css'
import 'weui'
import { money } from '../api/money';
function OrderList({list}) {
    return (
        <div className="weui-media-box_appmsg ord-pro-list order-list">
            <div className="weui-media-box__hd">
                <a href="javascript:;">
                <img className="weui-media-box__thumb" src={list.url} alt=""/>
                </a>
            </div>
            <div className="weui-media-box__bd">
                <h1 className="weui-media-box__desc">
                    <a href="javascript:;" className="ord-pro-link">{list.title}</a>
                </h1>
                <p className="weui-media-box__desc">规格：<span></span><span>{list.gg}</span></p>
                <div className="clear mg-t-10">
                    <div className="wy-pro-pri fl"><em className="red font-15">{money(list.price)}</em></div>
                    <div className="pro-amount fr"><span className="font-13">数量×<em className="name">{list.num}</em></span></div>
                </div>
            </div>
        </div>
    )
}
export default  OrderList