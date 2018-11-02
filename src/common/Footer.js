import React from 'react'
import {NavLink} from 'react-router-dom';
import './footer.css';
function Footer(porps) {
  return (
    <footer>
    <NavLink to="/home" activeClassName="active">首页</NavLink>
    <NavLink to="/classify" activeClassName="active">分类</NavLink>
    <NavLink to="/buy_car" activeClassName="active">购物车</NavLink>
    <NavLink to="/user" activeClassName="active">我的</NavLink>
  </footer>
  )
}
export default Footer