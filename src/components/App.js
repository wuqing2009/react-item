import React, { Component } from 'react';
import {connect} from "react-redux";
import {Route,Switch,Redirect} from 'react-router-dom';
import * as types from '../store/types'
import {asyncActionAuto,asyncActionHome} from '../store/asyncAction';
import Footer from '../common/Footer';
import Home from './Home';
import Loading from '../common/Loading';
import Loadable from 'react-loadable'
import AuthUser from '../guard/AuthUser';

const Classify = Loadable({
  loader: () => import('./Classify'),
 loading: Loading
})
const Prolist = Loadable({
  loader: () => import('./Prolist'),
 loading: Loading
})
const Detail = Loadable({
  loader: () => import('./Detail'),
 loading: Loading
})
const User = Loadable({
  loader: () => import('./User'),
 loading: Loading
})
const Message = Loadable({
  loader: () => import('./Message'),
 loading: Loading
})
const Address = Loadable({
  loader: () => import('./Address'),
 loading: Loading
})
const BuyCar = Loadable({
  loader: () => import('./BuyCar'),
 loading: Loading
})
const Order = Loadable({
  loader: () => import('./Order'),
 loading: Loading
})
const Reg = Loadable({
  loader: () => import('./Reg'),
 loading: Loading
})
const Login = Loadable({
  loader: () => import('./Login'),
 loading: Loading
})
const EditAddress = Loadable({
  loader: () => import('./EditAddress'),
 loading: Loading
})

class App extends Component {
  constructor(props) {
    super(props); 
    if (/home|classify|buy_car|user|/.test(props.location.pathname)) {
      props.viewFoot(true)
    }
    if (/address|login|reg|message|order|prolist|detail/.test(props.location.pathname)) {
      props.viewFoot(false)
    }
    props.autoLogin()
    props.getHome(
      "http://localhost:8888/banner",
      types.UPDATE_BANNER,
      {type:"/activity"}
    )
    props.getHome(
      "http://localhost:8888/lookup",
      types.UPDATE_TONE,
      {type:"洗护专区"}
    )
    props.getHome(
      "http://localhost:8888/lookup",
      types.UPDATE_TTWO,
      {type:"品牌酒类"}
    )
    props.getHome(
      "http://localhost:8888/lookup",
      types.UPDATE_TTHREE,
      {type:"热销商品"}
    )
  }
  
  render() {
    let {bLoading,bFoot}=this.props
    return (
      <>
      {bLoading&&<Loading></Loading>}
      <Switch>
        <Route path="/home" component={Home}></Route>
        <Route path="/classify" component={Classify}></Route>
        <Route path="/prolist" component={Prolist}></Route>
        <Route path="/detail/:id" component={Detail}></Route>
        <AuthUser path="/edit_address/:id" component={EditAddress}></AuthUser>
        <AuthUser path="/user" component={User}></AuthUser>
        <AuthUser path="/message" component={Message}></AuthUser>
        <AuthUser path="/address" component={Address}></AuthUser>
        <AuthUser path="/buy_car" component={BuyCar}></AuthUser>
        <AuthUser path="/order" component={Order}></AuthUser>
        <Route path="/reg" component={Reg}></Route>
        <Route path="/login" component={Login}></Route>
        <Redirect from="/" to="/home" exact></Redirect>
      </Switch>
      {bFoot&&<Footer></Footer>}
      </>
    );
  }
  componentWillReceiveProps(nextProps){
    let routerPath = nextProps.location.pathname;
    if (this.props.user!==nextProps.user &&nextProps.login&&this.props.user.tel) {
      fetch(
        "http://localhost:8888/change",
        {
          credentials: 'include',
          method: "POST",
          headers: new Headers({
            'Content-Type': 'application/json'
          }),
          body:JSON.stringify(nextProps.user)
        }
      )
    }
    if (this.props.location.pathname!==routerPath) {
      
      window.scrollTo(0,0);
      if (/home|classify|buy_car|user|/.test(routerPath)) {
        this.props.viewFoot(true)
      }
      if (/address|login|reg|message|order|prolist|detail|edit_address/.test(routerPath)) {
        this.props.viewFoot(false)
      }
    }
  }
}

let initMapStateToProps=(state)=>({
  bLoading:state.bLoading,
  bFoot:state.bFoot,
  user:state.user,
  login:state.login
});

let initMapDispatchToProps=(dispatch)=>({
  viewFoot:(bl)=>{dispatch({type:types.VIEW_FOOT,payload:bl})},
  autoLogin:()=>(asyncActionAuto(
    dispatch,
    types.UPDATE_USER,
  )),
  getHome:(url,type,val,met)=>(asyncActionHome(
    url,dispatch,type,val,met
  ))
});

export default connect(
  initMapStateToProps,
  initMapDispatchToProps
)(App);
