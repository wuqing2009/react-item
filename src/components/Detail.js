import React, { Component } from 'react'
import Top from '../common/Top';
import Banner from '../common/Banner';
import ShopDetail from '../children/ShopDetail';
import * as types from '../store/types';
import {connect} from 'react-redux';
import {asyncActionHome} from '../store/asyncAction';
import { oTa } from '../api/getArr';
import './detail.css'
class Detail extends Component {
  constructor(props) {
    super(props);
    props.getDetail({goods:props.match.params.id})
  }
  
  render() {
    let {det}=this.props
    if (!det.goods) {
      return null
    }
    return (
      <div className='detail'>
        <Top val='商品详情'></Top>
        <Banner banner={oTa(det.img)}></Banner>
        <ShopDetail {...this.props}></ShopDetail>
      </div>
    )
  }
}
let initMapStateToProps =(state)=>({
  det:state.det
})
let initMapDispatchToProps=(dispatch)=>({
  getDetail:(val)=>(
    asyncActionHome(
      "http://localhost:8888/lookup",
      dispatch,
      types.UPDATE_DET,
      val
      )
  )
});

export default connect(
  initMapStateToProps,
  initMapDispatchToProps
)(Detail)