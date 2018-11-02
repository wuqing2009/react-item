import React from 'react'
import {Link} from 'react-router-dom';
import './pay.css'
import { money } from '../api/money';

function Pay({sum}) {
    return (
        <div className="pay">
        <p>合计： <span>{money(sum)}</span></p>
        <Link to="/order">结算(<span></span>)</Link>
         </div>
    )
}
export default Pay