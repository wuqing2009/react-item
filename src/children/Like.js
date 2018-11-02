import React from 'react'
import SwipeList from '../common/SwipeList';
import  './like.css';
function Like({list}) {
  return (
    <div className="hot_sale">
    <div className="hot_commodity">猜你喜欢</div>
        <SwipeList list1={list}></SwipeList>
  </div>
)
}
export default Like
