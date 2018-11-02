import React from 'react'
import PanelHd from '../common/PanelHd';
import './userMoney.css';
function UserMoney(props) {
    return (
        <div className="weui-panel weui-panel_access">
          <PanelHd val='我的小金库' url='jk'></PanelHd>
          <div className="weui-panel__bd">
            <div className="weui-flex">
              <div className="weui-flex__item">
                <a href="" className="center-ordersModule">
                  <div className="center-money"><em>800.0</em></div>
                  <div className="name">账户总额</div>
                </a>
              </div>
              <div className="weui-flex__item">
                <a href="" className="center-ordersModule">
                  <div className="center-money"><em>50.0</em></div>
                  <div className="name">返现金额</div>
                </a>
              </div>
              <div className="weui-flex__item">
                <a href="" className="center-ordersModule">
                  <div className="center-money"><em>550.0</em></div>
                  <div className="name">待返还</div>
                </a>
              </div>
              <div className="weui-flex__item">
                <a href="" className="center-ordersModule">
                  <div className="center-money"><em>165</em></div>
                  <div className="name">蓝豆</div>
                </a>
              </div>
            </div>
          </div>
        </div>
  
    )
}
export default  UserMoney 
