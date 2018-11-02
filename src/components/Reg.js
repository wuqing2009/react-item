import React, { Component } from 'react'
import Top from '../common/Top';
import MyInput from '../common/MyInput';
import './reg.css'
import SaveBtn from '../common/SaveBtn';
import {Link} from 'react-router-dom';
export default class Reg extends Component {
  state={
    msg1:false,
    msg2:false,
    userName:'',
    tel:'',
    password:''
  }
  constructor(props) {
    super(props);
    this.send=this.send.bind(this)
    this.save=this.save.bind(this)
    this.show=this.show.bind(this)
  }
  save(){
    let {userName,tel,password}=this.state
    let data={
      user:userName,
      tel,
      key:password
    }
    if (userName&&tel&&password) {
      fetch(
        "http://localhost:8888/register",
        {
          credentials: 'include',
          method: 'POST',
          headers: new Headers({
            'Content-Type': 'application/json'
          }),
          body:JSON.stringify(data)
        }
      ).then(res=>res.json()).then(da=>{
        if (da) {
          this.props.history.push("/login")
        } else {
          this.show('msg1')
        }
     
      })
    } else {
      this.show('msg2')
    }

  }
  show(val){
    this.setState(
      {
        [val]:true
      }
    );
    setTimeout(() => {
      this.setState(
        {
          [val]:false
        }
      );
    }, 1500);
  }
  send(ele){
    this.setState({
      [ele.target.name]:ele.target.value
    });
  }

  render() {
    let {userName,tel,password,msg1,msg2} = this.state
    return (
      <div className='reg'>
        <Top val="注册"></Top>
        <form >
        <MyInput name='userName' val={userName} tit="用户名" send={this.send}></MyInput>
        <MyInput name='tel' val={tel} tit="手机号" send={this.send}></MyInput>
        <MyInput name='password' val={password} tit="密码" send={this.send}></MyInput>
        </form>
        <SaveBtn val='注册' save={this.save}></SaveBtn>
        <div className="skip">
        <Link to="/login">登录</Link>
        </div>
        {msg1 && <h3 className="msg" >注册失败，该用户名已存在！！</h3>}
        {msg2 && <h3 className="msg" >注册信息不允许为空！！</h3>}
    </div>
    )
  }
}
