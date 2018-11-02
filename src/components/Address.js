import React, { Component } from 'react'
import AddressList from '../common/AddressList';
import Top from '../common/Top';
import './address.css'
import {Link} from 'react-router-dom';
import * as types from '../store/types'
import {connect} from 'react-redux';

class Address extends Component {
  render() {
    let {address}=this.props.user
    return (
      <div className="address">
      <Top val="地址管理"></Top>
      <div className="weui-content">
        <div className="weui-panel address-box">
        {
          address.map((item,index)=>(
            <AddressList item={item} i={index} key={item.num} change={this.change.bind(this)}></AddressList>
          ))
        }
          <Link className='add' to='/edit_address/-1'>添加收货地址</Link>
        </div>
      </div>
      </div>
    )
  }
  change(id,e){
    e.stopPropagation()
    let arr=[...this.props.user.address]
    arr.map(val=>(val.onOff=false))
    arr[id].onOff=true;
    this.props.updateAddress(arr)
    this.props.history.go(-1)
  }
}
let initMapStateToProps
let initMapDispatchToProps=(dispatch)=>({
  updateAddress:(val)=>(dispatch({type:types.UPDATE_ADDRESS,payload:val}))
});

export default connect(
  initMapStateToProps,
  initMapDispatchToProps
)(Address)