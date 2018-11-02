import React, { Component } from 'react'
import * as types from '../store/types';
import {connect} from 'react-redux';
import CarList from '../common/CarList';
import './buyCar.css'
import Pay from '../children/Pay';
import Empty from '../children/Empty';
import { sum } from '../api/sum';
import QueueAnim from 'rc-queue-anim';
 class BuyCar extends Component {
   state={
     onOff:true
   }
   constructor(props) {
     super(props);
     this.change=this.change.bind(this)
     this.all=this.all.bind(this)
     if (props.user.car.length===0) {
       props.updateCheck(false)
     }
   }
   change(){
    this.setState({
      onOff:!this.state.onOff
    });
   }
   all(){
    this.props.updateCheck(!this.props.check)
    this.props.user.car.map(val=>{
      this.props.updateCar({goods:val.goods,onOff:!this.props.check})
    })
   }
  render() {
    let {car}=this.props.user
    return (
      <QueueAnim component='div' className="buy-car">
        <div className="top">
            <a href="javascript:history.back()" className="back"></a>
            <span>购物车</span>
            <a href="JavaScript:void(0)" className="edit" onClick={this.change} >{this.state.onOff?"编辑":"取消"}</a>
        </div>
        <div className="main">
            <p className={this.props.check?"title select":"title"} onClick={this.all}  >全选</p>
            <QueueAnim component='div' className={this.state.onOff?"move a":"move b"}>
            {
              car.map(item=>(
                <CarList item={item} key={item.goods}></CarList>
              ))
            }
            </QueueAnim>
        </div>
          {sum(car)!==0?<Pay sum={sum(car)} />:null}
          {car.length===0?<Empty />:null}
      </QueueAnim>
    )
  }
}
let initMapStateToProps =(state)=>({
  user:state.user,
  check:state.check
})
let initMapDispatchToProps=(dispatch)=>({
  updateCar:(val)=>(dispatch({type:types.UPDATE_USECAR,payload:val})),
  updateCheck:(val)=>(dispatch({type:types.UPDATE_CHECK,payload:val}))
});

export default connect(
  initMapStateToProps,
  initMapDispatchToProps
)(BuyCar)