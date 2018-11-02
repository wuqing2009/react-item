import React, { Component } from 'react'
import Top from '../common/Top';
import SaveBtn from '../common/SaveBtn';
import MyInput from '../common/MyInput';
import * as types from '../store/types';
import {connect} from 'react-redux';
import './editAdress.css';
import 'weui';
 class EditAddress extends Component {
    send(e){
        this.setState({
          [e.target.name]:e.target.value
        });
    }
    check(){
      this.setState({
        onOff:!this.state.onOff
      });
    }
    state={
      name:'',
      tel:'',
      address:'',
      onOff:false,
      num:0,
      change:false
    }
    constructor(props) {
      super(props);
      this.send=this.send.bind(this)
      this.save=this.save.bind(this)
      this.remove=this.remove.bind(this)
      this.check=this.check.bind(this)
     let id = props.match.params.id;
     if (props.user.address[id]) {
       this.state={...props.user.address[id],change:true};
     }else{
       this.state.num=props.user.address.length
    
     }
    }
    
  render() {
    let {name,tel,address,onOff,change}=this.state
    return (
      <div className='edit-address'>
        <Top val='编辑地址'></Top>
        <MyInput tit='姓名' val={name} name='name' send={this.send}></MyInput>
        <MyInput tit='手机号' val={tel} name='tel'  send={this.send}></MyInput>
        <MyInput tit='详细地址' val={address} name='address' send={this.send}></MyInput>
        <div className="weui-cell weui-cell_switch">
        <div className="weui-cell__bd">设为默认地址</div>
        <div className="weui-cell__ft">
          <input className="weui-switch" type="checkbox" name='onOff' checked={onOff} onChange={this.check}/>
        </div>
        </div>
        <SaveBtn val='保存地址' save={this.save}></SaveBtn>
        {change&&<SaveBtn val='删除地址' save={this.remove}></SaveBtn>}
      </div>
    )
  }
  remove(){
    let arr = [...this.props.user.address]
    arr.map((val,index)=>{
      if (val.num===this.state.num) {
        arr.splice(index,1)
      }
    })
    this.props.updateAddress(arr)
    this.props.history.go(-1)
  }
  save(){
    let {name,tel,address,onOff,change,num}=this.state
    let obj={name,tel,address,onOff,num};
    let arr = [...this.props.user.address]
    if (onOff) {
      arr.map(val=>(val.onOff=false))
    }
    if (change) {
      arr.map((val,index)=>{
        if (val.num===num) {
          arr[index]=obj
        }
      })
    } else {
      arr.push(obj)
    }
    this.props.updateAddress(arr);
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
)(EditAddress)