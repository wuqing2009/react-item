import React, { Component } from 'react'
import './shopDetail.css';
import BuyShop from './BuyShop';
import {connect} from 'react-redux';
import { money } from '../api/money';
import { oTa } from '../api/getArr';
import * as types from '../store/types';
import {Link} from 'react-router-dom';
 class ShopDetail extends Component {
  render() {
      let {det,car,buy}=this.props
    return (
        <div className="shop-detail">
        <div className="data">
        <p className="introduce">{det.title}</p>
        <p className="price">{money(det.price)}</p>
        <p className="scj">市场价：<span>{money(det.prc)}</span></p>
        <div className="send">
            <div className="lf">
                运费：包邮
            </div>
            <div className="rf">
                默认配送：圆通速递
            </div>
        </div>
    </div>
    <div className="warm_prompt">
        温馨提示：海外进口商品经常更换包装盒附件，若更新不及时，敬请谅解！详情里的商品的商品参数、图片、功能及附件仅供参考，请以实物为准。平台保证销售的额进口商品为海外原装正品，请放心选购。
    </div>
    <div className="img_word">
        <p>图文详情</p>
        {
            oTa(det.imgs).map((val,index)=>(
                <img src={val} key={index} alt=""/>
            ))
        }
    </div>
    <div className="tool_bar">
        <a className="shangjia" href="javascript:void(0)"></a>
        <Link className="buy_cart" to="/buy_car">
            <i className="icon_cart">
                <span className="num">{car.length}</span>
            </i>
        </Link>
        <a className="buy" href="javascript:void(0)" 
        onClick={this.buyS.bind(this,{onOff:true,to:"/buy_car"})}>立即购买</a>
        <a className="join" href="javascript:void(0)"
        onClick={this.buyS.bind(this,{onOff:true,to:this.props.location.pathname})}>加入购物车</a>
    </div>
    {
        buy.onOff&&<BuyShop {...this.props}></BuyShop>
    }
    
    </div>
    )
  }
  buyS(val){
    document.body.style.position="fixed"
    this.props.updateBuy(val)
  }
}
let initMapStateToProps =(state)=>({
    det:state.det,
    car:state.user.car,
    buy:state.buy
  })
  let initMapDispatchToProps=(dispatch)=>({
    updateBuy:(val)=>(dispatch({type:types.UPDATE_BUY,payload:val}))
  });
  
  export default connect(
    initMapStateToProps,
  initMapDispatchToProps
  )(ShopDetail)