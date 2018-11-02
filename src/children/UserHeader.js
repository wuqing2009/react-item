import React from 'react'
import './userHeader.css'
import {Link} from 'react-router-dom';
function UserHeader({img,name,tel}) {
    return (
        <div className="wy-center-top">
        <Link to="/message" className="user-header">
        <div className="weui-media-box weui-media-box_appmsg">
          <div className="weui-media-box__hd"><img className="weui-media-box__thumb radius" src={img} alt=""/></div>
          <div className="weui-media-box__bd">
            <h4 className="weui-media-box__title user-name">{name}</h4>
            <p className="user-grade">等级：普通会员</p>
            <p className="user-integral">会员号：{tel}</p>
          </div>
        </div>
        </Link>
      </div>
    )
}
export default  UserHeader 
