import React from 'react'
import './rightList.css';
import {Link} from 'react-router-dom';
function RightList({list}) {
    return (
        <div className="right-list">
            <div  className="right_content">
                <div className="category">
                    <h4 className="tit">{list[0].type}</h4>
                    <div className="show">
                    {
                        list.map(val=>(
                        <div className="product1" key={val.goods}>
                            <Link className="link1" to={{pathname:"/detail/"+val.goods}}>
                                <p className="introduce1">{val.title}</p>
                                <img src={val.url} alt=""/>
                            </Link>
                        </div>  
                        ))
                    }
                    </div>
                </div>
            </div>
        </div>
    )
}
export default  RightList 
