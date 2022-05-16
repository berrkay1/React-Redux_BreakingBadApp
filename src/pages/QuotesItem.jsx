import React from 'react'
import {Link} from 'react-router-dom';

function QuotesItem({ item }) {
    return (
        <div style={{padding :'10px 0'}} className='quote-item'>
            <h3>Quote detail</h3>
            <Link className='quote-detail' to={`/quotes/${item.quote_id}`}>
            <q style={{marginRight:5}}>{item.quote}</q>
            </Link>
            <strong>{item.author}</strong>
        </div>
    )
}

export default QuotesItem