import React from 'react'
import './top.css';
function Top({val}) {
    return (
        <div className="top-header">
        <a href="javascript:history.back()" className="back lf">返回</a>
        <span>{val}</span>
        </div>
    )
}
export default  Top ;