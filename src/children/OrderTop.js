import React from 'react'
import './orderTop.css'
import 'weui'
import {Link} from 'react-router-dom';

function OrderTop ({address}) {
    return (
        <div className="wy-media-box weui-media-box_text address-select order-top">
        <div className="weui-media-box_appmsg">
          <div className="weui-media-box__hd proinfo-txt-l" style={{width:"20px"}}>
            <span className="promotion-label-tit">
                <img src="/images/icon_nav_city.png"/>
            </span>
          </div>
          <div className="weui-media-box__bd">
            <Link to="/address" className="weui-cell_access">
              <h4 className="address-name"><span>{address.name}</span><span>{address.tel}</span></h4>
              <div className="address-txt">{address.address}</div>
            </Link>
          </div>
          <div className="weui-media-box__hd proinfo-txt-l" style={{width:"16px"}}>
            <div className="weui-cell_access">
                <span className="weui-cell__ft"></span>
            </div>
          </div>
        </div>
      </div>
    )
}
export default OrderTop 