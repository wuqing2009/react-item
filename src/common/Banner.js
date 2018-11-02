import React from 'react'
import './banner.css'
import ReactSwipe from 'react-swipe';

function Banner({banner}) {
    return (
            <ReactSwipe className="carousel" swipeOptions={{continuous: true,auto:2000}}>
            {
                banner.map((val,index)=>(
                <div className="swipe swipe-wrap my-swipe" key={index}>
                    <a href="javascript:;"><img src={val} alt=""/></a>
                </div>
                ))
            }
    
            </ReactSwipe>
    )
}

export default Banner

  