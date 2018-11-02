import React, { Component } from 'react'
import Top from '../common/Top';
import MyInput from '../common/MyInput';
import './login.css'
import SaveBtn from '../common/SaveBtn';
import * as types from '../store/types';
import {asyncActionLogin} from '../store/asyncAction';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
class Login extends Component {
  state={
    msg1:false,
    userName:'',
    password:'',
    check:false
  }
  constructor(props) {
    super(props);
    this.send=this.send.bind(this)
    this.save=this.save.bind(this)
    this.change=this.change.bind(this)
  }
  save(){
    let obj ={
      user:this.state.userName,
      password:this.state.password,
      time:this.state.check
    }
    this.props.viewLoading(true)
    fetch(
      "http://localhost:8888/login",
      {
        credentials: 'include',
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/json'
        }),
        body:JSON.stringify(obj)
      }
    ).then(res=>res.json()).then(data=>{
      this.props.viewLoading(false)
      if (data) {
        this.props.login(data)
        this.props.updateLogin()
        this.props.history.push("/user")
      } else {
        this.setState({
          msg1:true
        });
        setTimeout(() => {
          this.setState({
            msg1:false
          });
        }, 1500);
      }
    })

  }
  send(ele){
    this.setState({
      [ele.target.name]:ele.target.value
    });
  }
  change(ele){
    this.setState({
      [ele.target.name]:ele.target.checked
    });
  }
  componentWillReceiveProps(){
    if (this.props.in) {
      this.props.history.go(-1)
    }
  }
  render() {
    let {userName,password,msg1} = this.state
    return (
      <div className='login'>
        <Top val="登录"></Top>
        <form >
        <MyInput name='userName' val={userName} tit="用户名" send={this.send}></MyInput>
        <MyInput name='password' val={password} tit="密码" send={this.send}></MyInput>
        <div className="pwd ck">
            <input type="checkbox"  name='check' onClick={this.change}/>
            <span>七天免登陆</span>
        </div>
        </form>
        <SaveBtn val='登录' save={this.save}></SaveBtn>
        <div className="skip">
        <Link to="/reg">注册</Link>
        </div>
        {msg1 && <h3 className="msg" >登录失败，用户名或密码错误！！</h3>}
    </div>
    )
  }
}
let initMapStateToProps =(state)=>({
  in:state.login
})
let initMapDispatchToProps=(dispatch)=>({
  login:(val)=>(dispatch({type:types.UPDATE_USER,payload:val})),
  viewLoading:(bl)=>(dispatch({type:types.VIEW_LOADING,payload:bl})),
  updateLogin:()=>(dispatch({type:types.UPDATE_LOGIN,payload:true})), 
});

export default connect(
  initMapStateToProps,
  initMapDispatchToProps
)(Login)