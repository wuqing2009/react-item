import React from 'react'
import "weui"
import './panelHd.css';
import {Link} from 'react-router-dom';
function PanelHd ({val,url,to,ck}) {
  let go = to || '/user'
    return (
        <div className="weui-panel__hd" onClick={ck}>
        <Link to={go} className="weui-cell weui-cell_access center-alloder">
          <div className="weui-cell__bd wy-cell">
            <div className="weui-cell__hd">
              <img src={"/images/center-icon-"+url+".png"} alt="" className="center-list-icon"/>
            </div>
            <div className="weui-cell__bd weui-cell_primary">
              <p className="center-list-txt">{val}</p>
            </div>
          </div>
          <span className="weui-cell__ft"></span>
        </Link>   
      </div>
    )
}
export default  PanelHd 