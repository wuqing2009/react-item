import React, { Component } from 'react'
import Search from '../common/Search';
import TopNav from '../children/TopNav';
import Shop from '../children/Shop';
import './prolist.css';
import * as types from '../store/types';
import {asyncActionHome} from '../store/asyncAction';
import {connect} from 'react-redux';
import { changeArr } from '../api/changeArr';
import RcQueueAnim from 'rc-queue-anim';
class Prolist extends Component {
  state={
    count:20,
    active:1,
    up:false,
    more:true
  }
  constructor(props) {
    super(props);
    this.getMore = this.getMore.bind(this)
    this.change = this.change.bind(this)
    if (props.all.length===0) {
      props.getAll({
        start:0,
        count:this.state.count
      })
    }
  }
  getMore(){
    let {count}=this.state

      this.props.getAll({
        start:this.props.all.length,
        count
      })
    
  }
  change(active,up){

    this.setState({
      active,up
    });
  }
  render() {

  let {all}=this.props
  if (all.length===0)return null 

    return (
        <>
        <div className="fx">
          <Search></Search>
          <TopNav active={this.state.active} up={this.state.up} change={this.change}></TopNav>
        </div>
        <RcQueueAnim component='div'  className="prolist">
          <Shop list={changeArr(all,this.state.active,this.state.up)} key='1'></Shop>
          {this.props.more&& <div className="more" onClick={this.getMore} key='2'>更多</div>}
        </RcQueueAnim>
        </>

    )
  }
}
let initMapStateToProps =(state)=>({
  all:state.all,
  more:state.more
})
let initMapDispatchToProps=(dispatch)=>({
  getAll:(val)=>(
    asyncActionHome(
      "http://localhost:8888/home",
      dispatch,
      types.UPDATE_ALL,
      val
      )
  )
});

export default connect(
  initMapStateToProps,
  initMapDispatchToProps
)(Prolist)