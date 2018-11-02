import React from 'react'
import  './search.css';
function Search() {
  return (
    <div className="search">
    <a href="javascript:history.back()" className="back lf"></a>
    <input type="text" className="txt lf"/>
    <button type="submit" className="search_btn">搜索</button>
</div>
)
}
export default  Search 