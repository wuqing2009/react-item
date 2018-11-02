import React from 'react'
import "./saveBtn.css"
function SaveBtn({save,val}) {
    var name = val || "保存"
    return (
        <button className="save-btn" onClick={save}>{name}</button>
    )
}
export default  SaveBtn 