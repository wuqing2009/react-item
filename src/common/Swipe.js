import React, { Component } from 'react'
import ReactSwipe from 'react-swipe';
import './swipe.css';
import SwipeList from './SwipeList';
export default class Swipe extends Component {
    fn(index){
        this.setState({
            index:index+1
        });
    }
    constructor(props) {
        super(props);
        this.state={
            index:1
        }
    }  
  render() {
      let {list,title}=this.props
    
    return (
        <div className="hot_sale">
        <div className="hot_commodity">
        {title}
        <span>{list.length}</span>
        <span>/</span>
        <span>{this.state.index}</span>
        </div>
        <ReactSwipe swipeOptions={{callback:(index)=>{
            this.fn(index)   
        }}}>
            {
                list.map(val=>(
                    <div key={val[0].goods}>
                        <SwipeList list1={val}></SwipeList>
                    </div>
                ))
            }
        </ReactSwipe>
        
      </div>
    )
  }
}
