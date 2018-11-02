import React from 'react'
import 'weui';
import './nav.css';
import {Link} from 'react-router-dom';
function Nav() {
    return (
        <div className="weui-flex wy-iconlist-box">
            <div className="weui-flex__item">
                <Link to="/prolist" className="wy-links-iconlist">
                    <div className="img">
                        <img src="/images/icon-link1.png"/>
                    </div>
                    <p>精选推荐</p>
                </Link>
            </div>
            <div className="weui-flex__item">
                <Link to="/prolist" className="wy-links-iconlist">
                    <div className="img">
                        <img src="/images/icon-link2.png"/>
                    </div>
                    <p>酒水专场</p>
                </Link>
            </div>
            <div className="weui-flex__item">
                <a href="" className="wy-links-iconlist">
                    <div className="img">
                        <img src="/images/icon-link3.png"/>
                    </div>
                    <p>订单管理</p>
                </a>
            </div>
            <div className="weui-flex__item">
                <a href=" " className="wy-links-iconlist">
                    <div className="img">
                        <img src="/images/icon-link4.png"/>
                    </div>
                    <p>商家入驻</p>
                </a>
            </div>
        </div>

    )
}
export default Nav