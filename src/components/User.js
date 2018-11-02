import React, { Component } from 'react'
import "weui"
import "./user.css"
import PanelHd from '../common/PanelHd';
import UserOrder from '../children/UserOrder';
import UserMoney from '../children/UserMoney';
import UserHeader from '../children/UserHeader';
import * as types from '../store/types'
import {connect} from 'react-redux';
import {asyncActionLogout} from '../store/asyncAction';
import RcQueueAnim from 'rc-queue-anim';

class User extends Component {

  constructor(props) {
    super(props);
    this.logout=this.logout.bind(this)
  }
  logout(ele){
    ele.preventDefault();
    this.props.out();
    this.props.history.push('/home')
  }
  render() {
    let {user}=this.props
    return (
      <div  className="weui-content" style={{background:"#ccc"}}>
        <UserHeader {...user} key='1'></UserHeader>
        <UserOrder key='2'></UserOrder >
        <UserMoney key='3'></UserMoney > 
        <RcQueueAnim component='div' className="weui-panel">
        <PanelHd val='交易记录' url='jyjl' key='11'></PanelHd>
        <PanelHd val='我的收藏' url='sc' key='12'></PanelHd>
        <PanelHd val='地址管理' url='dz' to='/address' key='13'></PanelHd>
        <PanelHd val='我的银行卡' url='yhk' key='14'></PanelHd>
        <PanelHd val='密码修改' url='dlmm' key='15'></PanelHd>
        <PanelHd val='退出账号' url='out' ck={this.logout} key='16'></PanelHd>
        </RcQueueAnim>
      </div>

    )
  }
}
let initMapStateToProps
let initMapDispatchToProps=(dispatch)=>({
  out:()=>(asyncActionLogout(
    dispatch,
    types.UPDATE_USER
  )),

});

export default connect(
  initMapStateToProps,
  initMapDispatchToProps
)(User)