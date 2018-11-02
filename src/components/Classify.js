import React, { Component } from 'react'
import LeftNav from '../children/LeftNav';
import RightList from '../children/RightList';
import Search from '../common/Search';
import "./classify.css"
import * as types from '../store/types';
import {connect} from 'react-redux';
import {asyncActionHome} from '../store/asyncAction';
import { lookup } from '../api/lookup';
 class Classify extends Component {
  state={
    arr:[
      "热销商品",
      "品牌酒类",
      "精选茶叶",
      "品牌鞋类",
      "品牌奶粉",
      "精品美食",
      "洗护专区",
      "时令鲜果",
      "时尚箱包",
      "首饰奢品",
      "地标特产",
      "流行服饰",
      "男女鞋靴",
      "营养保健",
      "家居日用",
      "数码/家电",
      "母婴用品",
      "品牌专场",
  ],
  active:"热销商品"
  }
  constructor(props) {
    super(props);
    this.tab=this.tab.bind(this)
    if (!lookup(props.list,this.state.active)) {
    props.getList({type:this.state.active})
      
    }
  }
  
  render() {
    let {list}=this.props
    if (!lookup(list,this.state.active))return null
   
    return (
      <div className="classify">
        <Search></Search>
        <LeftNav tab={this.tab} arr={this.state.arr} active={this.state.active}></LeftNav>
        <RightList list={lookup(list,this.state.active)}></RightList>
      </div>
    )
  }
  tab(val){
    if (!lookup(this.props.list,val)) {
      this.props.getList({type:val})      
    }
    this.setState({
      active:val
    });
  }
}
let initMapStateToProps =(state)=>({
  list:state.list
})
let initMapDispatchToProps=(dispatch)=>({
  getList:(val)=>(
    asyncActionHome(
      "http://localhost:8888/lookup",
      dispatch,
      types.UPDATE_LIST,
      val
      )
  )
});

export default connect(
  initMapStateToProps,
  initMapDispatchToProps
)(Classify)