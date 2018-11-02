import React from 'react'
import './shop.css';
import ShopList from './ShopList';
function Shop({list}) {
  return (
    <div className="list_show">
    {
      list.map(val=>(
        <ShopList key={val.goods} shop={val}></ShopList>

      ))
    }
    </div>
  )
}
export default Shop 
