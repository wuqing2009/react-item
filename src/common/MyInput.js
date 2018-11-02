import React from 'react';
import './myInput.css'
function MyInput({name,val,tit,send}) {
    let def = "请输入"+tit;
    return (
        <div className="my-input">
            <span>{tit}</span>
            <input type="text" name={name} value={val} placeholder={def} onChange={send}  />
        </div>
    )
}
export default MyInput