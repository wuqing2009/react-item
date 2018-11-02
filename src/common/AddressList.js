import React from 'react'
import {Link} from 'react-router-dom';
import 'weui'
import './addressList.css'
function AddressList ({item,change,i}) {
    return (
        <div className="weui-panel__bd">
        <div className="weui-media-box weui-media-box_text address-list-box" onClick={change.bind(null,i)}>
          <Link to={{pathname:'/edit_address/'+item.num}} className="address-edit" onClick={(e)=>(e.stopPropagation())}></Link>
          <h4 className="weui-media-box__title"><span>{item.name}</span><span>{item.tel}</span></h4>
          <p className="weui-media-box__desc address-txt">{item.address}</p>
          {item.onOff&&<span className="default-add">默认地址</span>}
        </div>
      </div>
    )
}
export default AddressList 
