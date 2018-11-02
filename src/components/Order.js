import React, { Component } from 'react'
import Top from '../common/Top';
import * as types from '../store/types';
import {connect} from 'react-redux';
import OrderTop from '../children/OrderTop';
import OrderList from '../children/OrderList';
import OrderCenter from '../children/OrderCenter';
import SaveBtn from '../common/SaveBtn';
import 'weui'
import './order.css';
import { money } from '../api/money';
import { sum } from '../api/sum';
import { defalutAddress } from '../api/getArr';
class Order extends Component {
  constructor(props) {
    super(props);
    this.remove=this.remove.bind(this)
  }
  
  render() {

    let {car,address}=this.props.user
    return (
      <div className="weui-content order">
        <Top val="订单详情"></Top>
        <OrderTop address={defalutAddress(address)}></OrderTop>
        <div className="wy-media-box weui-media-box_text">
          <div className="weui-media-box__bd">
          {
            car.map(val=>{
              if (val.onOff) {
                return <OrderList list={val} key={val.goods}></OrderList>
              }
            })
          }
          </div>
        </div>
        <OrderCenter></OrderCenter>
        <div className="wy-media-box weui-media-box_text">
          <div className="mg10-0 t-c">总金额：<span className="wy-pro-pri mg-tb-5"><em className="red font-20">{money(sum(car))}</em></span></div>
          </div>
          <SaveBtn val="微信支付" save={this.remove}></SaveBtn>
        </div>
    )
  }
  remove(){
    this.props.user.car.map(val=>{
      if (val.onOff) {
        this.props.removerCar({
          goods:val.goods
        })
      }
    })
    this.props.history.push("/user")
  }
}


let initMapStateToProps =(state)=>({
  userc:state.user
})
let initMapDispatchToProps=(dispatch)=>({

  removerCar:(val)=>(dispatch({type:types.REMOVE_USECAR,payload:val}))
});

export default connect(
  initMapStateToProps,
  initMapDispatchToProps
)(Order)