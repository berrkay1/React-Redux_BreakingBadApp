import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom';
import axios from 'axios';
import Loading from '../components/Loading';

function Detail() {

    const [char,setChar] = useState();
    const [loading,setLoading] = useState(true);

    const { char_id } = useParams()

    useEffect(()=>{
        axios(`https://www.breakingbadapi.com/api/characters/${char_id}`)
        .then(res => res.data)
        .then(data =>setChar(data))
        .finally(()=> setLoading(false))
        
    },[char_id])
    

    
  return (

   <div>
       {loading && <Loading/>} 
        {char && (
            char.map(item => (
                <div>
                    <h1>{item.name}</h1>
                    <img style={{ width: '50%' }} src={item.img} alt={item.name} />
                </div>
            ))
        
    )}

    {char && (
        <pre>
            {JSON.stringify(char[0],null,2)}
        </pre>
    )}
   </div>
      
    
  )
}

export default Detail