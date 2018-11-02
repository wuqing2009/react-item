import React from 'react'
function Select({name,val,send,list}) {
    return (
        <select  name={name} value={val} onChange={send}>
        {list.map(val=>(
            <option key={val}>{val}</option>   
        )) }              
        </select>
    )
}
export default  Select 
