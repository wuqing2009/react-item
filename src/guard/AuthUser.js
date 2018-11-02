import React, { Component } from 'react'
import {Route,Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import * as types from '../store/types'

class AuthUser extends Component {
  constructor(props) {
    super(props);
    this.state={
      onOff:true
    }
    if (props.login) {
      this.state.onOff=false
    } else {
      props.viewLoading(true)
      fetch(
        "http://localhost:8888/verify",
        {
          credentials: 'include',
          method: 'GET',
          headers: new Headers({
            'Content-Type': 'application/json'
          })
        }
      ).then(
        res=>res.json()
      ).then(
        data=>{
          this.props.viewLoading(false)
          if (data) {
            this.props.updateLogin()
            this.props.updateUser(data)   
          }
          this.setState({
            onOff:false
          }); 
    }
  )
    }
  }
  
  render() {
    if (this.state.onOff)return null
    let {component:Component, login, user,  ...rest}=this.props
    return (
      <Route {...rest} render={(props)=>(
        login ?
        <Component {...props} user={user} /> :
        <Redirect to="/login"/>
      )}/>
    )
  }
}

let initMapStateToProps=state=>({
  login:state.login,
  user:state.user
});
let initMapDispatchToProps=(dispatch)=>({
  viewLoading:(bl)=>{dispatch({type:types.VIEW_LOADING,payload:bl})},
  updateLogin:()=>{dispatch({type:types.UPDATE_LOGIN,payload:true})},
  updateUser:(data)=>{dispatch({type:types.UPDATE_USER,payload:data})},

});
export default connect(
  initMapStateToProps,
  initMapDispatchToProps
)(AuthUser);