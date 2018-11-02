import React, { Component } from 'react'
import './carList.css';
import { money } from '../api/money';
import * as types from '../store/types';
import {connect} from 'react-redux';

 class CarList extends Component {
     constructor(props) {
         super(props);
         this.change=this.change.bind(this)
         this.remove=this.remove.bind(this)
     }
     
  render() {
      let {item}=this.props
    return (
        <div className="product car-list" >
        <div className="commodity_box">
            <div className={item.onOff?"commodity select":"commodity"} onClick={this.change.bind(null,{goods:item.goods,onOff:!item.onOff})}>
                <div  className="img lf">
                    <img src={item.url} alt=""/>
                </div>
                <div className="detail lf">
                    <p className="jieshao">{item.title}</p>
                    <p className="size">{item.gg}</p>
                    <div className="price_num">
                        <div className="price lf">
                            <span>{money(item.price*item.num)}</span>
                        </div>
                        <div className="num1 rf">
                            <button type="button" onClick={this.change.bind(null,{goods:item.goods,num:-1})}>-</button>
                            <span>{item.num}</span>
                            <button type="button" onClick={this.change.bind(null,{goods:item.goods,num:1})} >+</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="del" onClick={this.remove.bind(null,{goods:item.goods})} >删除</div>
        </div>
    </div>
    )
  }
  change(val,ele){
    ele.stopPropagation()
    this.props.updateCar(val)
    let on =true;
    this.props.user.car.map(val=>{
        if (!val.onOff) {
            on = false
        }
    })
    this.props.updateChick(on)
  }
  remove(val){
    this.props.removerCar(val)
  }
}
let initMapStateToProps=(state)=>({
    user:state.user
})
  let initMapDispatchToProps=(dispatch)=>({
    updateCar:(val)=>(dispatch({type:types.UPDATE_USECAR,payload:val})),
    removerCar:(val)=>(dispatch({type:types.REMOVE_USECAR,payload:val})),
    updateChick:(val)=>(dispatch({type:types.UPDATE_CHECK,payload:val}))
  });
  
  export default connect(
    initMapStateToProps,
    initMapDispatchToProps
  )(CarList)