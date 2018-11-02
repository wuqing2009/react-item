import React from 'react'
import './inputText.css'
function InputText({title,val,send,name,sty}) {
var styl = sty || {width:"100px"}
    return (
        <div className="input-text">
        <div className="leftBox">{title}</div>
        <div className="rightBox">
            <input type="text" name={name} value={val} onChange={send} style={styl} placeholder="请输入昵称"/>
        </div>
        </div>
    )
}
export default  InputText
