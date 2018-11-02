import React from 'react'
import PanelHd from '../common/PanelHd';
import './userOrder.css'
function UserOrder() {
    return (
  <div className="weui-panel weui-panel_access">
      <PanelHd val="全部订单" url="order-all"></PanelHd>
        <div className="weui-panel__bd">
        <div className="weui-flex">
          <div className="weui-flex__item">
            <a href="" className="center-ordersModule">
              <span className="weui-badge n" >2</span>
              <div className="imgicon"><img src="/images/center-icon-order-dfk.png"/></div>
              <div className="name">待付款</div>
            </a>
          </div>
          <div className="weui-flex__item">
            <a href="" className="center-ordersModule">
              <span className="weui-badge n" >1</span>
              <div className="imgicon"><img src="/images/center-icon-order-dfh.png"/></div>
              <div className="name">待发货</div>
            </a>
          </div>
          <div className="weui-flex__item">
            <a href="" className="center-ordersModule">
              <div className="imgicon"><img src="/images/center-icon-order-dsh.png"/></div>
              <div className="name">待收货</div>
            </a>
          </div>
          <div className="weui-flex__item">
            <a href="" className="center-ordersModule">
              <span className="weui-badge n" >2</span>
              <div className="imgicon"><img src="/images/center-icon-order-dpj.png"/></div>
              <div className="name">待评价</div>
            </a>
          </div>
        </div>
      </div>
    </div>
    )
}
export default UserOrder 
