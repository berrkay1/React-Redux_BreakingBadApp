import React, { useEffect } from 'react'
import {useSelector,useDispatch} from 'react-redux';
import Error from '../components/Error';
import Loading from '../components/Loading';
import {fetchQuotes} from '../redux/quotesSlice';
import QuotesItem from './QuotesItem';

function Quotes() {
 const dispatch = useDispatch();

  const quotes = useSelector(state => state.quotes.items);
  const status = useSelector(state => state.quotes.status);
  const error = useSelector(state => state.quotes.error);
 

  useEffect(()=>{
    if(status === 'idle'){
      dispatch(fetchQuotes())
    }
    
  },[dispatch,status])

  if(status === 'failed'){
    return <Error message={error}/>
  }

  return (
    <div >
      <h3>Quotes</h3>
      {status === 'loading' && (
         <Loading/>
      )}
      {quotes.map(item => (
        <div key={item.quote_id} >
          <QuotesItem item={item} />
        </div>
      ))}
    </div>
  )
}

export default Quotes