import React, { Component } from 'react'
import Search from '../common/Search';
import Banner from '../common/Banner';
import Nav from '../children/Nav';
import Swipe from '../common/Swipe';
import  './home.css';
import Like from '../children/Like';
import {connect} from 'react-redux';
import sliceArr from '../api/sliceArr';
import QueueAnim from 'rc-queue-anim';
class Home extends Component {
  render() {
    
    let {banner,t1,t2,t3}=this.props;
    if (!(banner[0] &&t1[0]&&t2[0]&&t3[0])) {
      return null;
    }
    // console.log(t1,t2)
    return (
      <QueueAnim component='div' type='scale' className="main">
       <Search></Search>
      <Banner banner={banner[0].banner} key='9'></Banner>
      <Nav></Nav>
      <QueueAnim type='bottom' className="content">
      <Swipe list={sliceArr(t1)} title="洗护专区" key='1'></Swipe>
      <Swipe list={sliceArr(t2)} title="酒水专区" key='2'></Swipe>
      <Like list={t3} key='3'></Like>
      </QueueAnim>
      </QueueAnim>
    )
  }
}
let initMapStateToProps=(state)=>({
  banner:state.banner,
  t1:state.t1,
  t2:state.t2,
  t3:state.t3,
});



export default connect(
  initMapStateToProps
)(Home);