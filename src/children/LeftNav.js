import React from 'react'
import './leftNav.css';
function LeftNav({arr,active,tab}) {
  return (
    <ul className="left-nav">
    {
      arr.map((val,index)=>(
        <li className={active===val?"current":""} key={index} onClick={tab.bind(null,val)}>{val}</li>
      ))
    }
   </ul>

   )
}
export default LeftNav 
