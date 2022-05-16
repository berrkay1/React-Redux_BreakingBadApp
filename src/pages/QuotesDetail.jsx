import React from 'react'
import {useParams} from 'react-router-dom';
import {useSelector} from 'react-redux';


function QuotesDetail() {

  const {quote_id} = useParams();
  
 
  const quotes = useSelector(state => state.quotes.items);
  const filter = quotes.find(item => item.quote_id === Number(quote_id))
  console.log(filter);
  return (
    <div>
      <h3>Quotes Detail</h3>
      <pre>{JSON.stringify(filter , null ,2)}</pre>
    </div>
  )
}

export default QuotesDetail