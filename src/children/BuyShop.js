import React, { Component } from 'react'
import './buyShop.css';
import * as types from '../store/types';
import {connect} from 'react-redux';
import { money } from '../api/money';

 class BuyShop extends Component {
        state={
            n:1
        }
     constructor(props) {
         super(props);
         this.close= this.close.bind(this)
         this.buyShop= this.buyShop.bind(this)
         this.change= this.change.bind(this)
     }
     close(){
        this.props.updateBuy({onOff:false})
        document.body.style.position = 'initial';
     }
     buyShop(){
        document.body.style.position = 'initial';
        this.props.updateCar({...this.props.det,num:this.state.n,onOff:false})
        this.props.history.push(this.props.buy.to)
        this.props.updateBuy({onOff:false})
     }
     change(val){
         if (this.state.n+val<1) {
             val=0
         }
         this.setState(
             {n:this.state.n+val}
         );
     }
  render() {
      let {det}=this.props
    return (
<div className="buy-shop">
    <div className="mask" ></div>
    <div id="affirm_buy" className="affirm" >
        <span className="x" onClick={this.close}>X</span>
        <div className="affirm_up">
            <div className="img_box lf">
                <img src={det.url} alt=""/>
            </div>
            <div className="affirm_jieshao lf">
                <p className="affirm_introduce">{det.title}</p>
                <p className="total">总价&nbsp;<span>{money(det.price*this.state.n)}</span></p>
            </div>
        </div>
        <div className="affirm_down">
            <div className="norms">
                <p>规格</p>
                <a href="javascript:void(0)">{det.gg}</a>
            </div>
            <div className="affirm_num">
                数量
                <button type="button" onClick={this.change.bind(null,-1)}>-</button>
                <span>{this.state.n}</span>
                <button type="button" onClick={this.change.bind(null,1)}>+</button> 
            </div>
        </div>
        <a href="JavaScript:void(0)" className="affirm_ok" onClick={this.buyShop} >确定</a>
    </div>
</div>
    )
  }
}
let initMapStateToProps =(state)=>({
    det:state.det,
    car:state.user.car,
    buy:state.buy
  })
  let initMapDispatchToProps=(dispatch)=>({
    updateBuy:(val)=>(dispatch({type:types.UPDATE_BUY,payload:val})),
    updateCar:(val)=>(dispatch({type:types.UPDATE_USECAR,payload:val}))
  });
  
  export default connect(
    initMapStateToProps,
  initMapDispatchToProps
  )(BuyShop)