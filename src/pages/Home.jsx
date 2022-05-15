import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { fetchCharacters } from '../redux/charactersSlice';
import Masonry from 'react-masonry-css'
import '../pages/syless.css'
import Loading from '../components/Loading';
import Error from '../components/Error';
import { FaChevronCircleDown } from 'react-icons/fa';

function Home() {
    const characters = useSelector((state) => state.characters.items);
    const page = useSelector((state) => state.characters.page);
    const nextPage = useSelector((state) => state.characters.nextPage);
    const status = useSelector((state) => state.characters.status);
    const error = useSelector((state) => state.characters.error);
    

    const dispatch = useDispatch();


    useEffect(() => {
        if(status === 'idle'){
            dispatch(fetchCharacters())
        } 
        
    }, [dispatch,status])



    if (status === 'failed') {
        return <Error message={error} />
    }



    return (
        <div>
            <h1>characters</h1>

            <Masonry
                breakpointCols={4}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column">
                {characters.map((item,idx) => (
                    <div key={idx}>
                        <img style={{ width: '100%' }} src={item.img} alt={item.name} />
                        <div className='char-name'>{item.name}</div>
                    </div>
                ))}
            </Masonry>
                
          

            <div style={{ textAlign: 'center',marginBottom:40 }}>
                
                {status === 'loading' && <Loading />}

                {!nextPage && (
                    <button
                        onClick={() => dispatch(fetchCharacters(page))}
                        style={{ border: 'none', background: 'none', cursor: 'pointer' }}>
                        <FaChevronCircleDown style={{ fontSize: 25 }} />

                    </button>
                )}

                {nextPage && <div style={{ fontSize: 20, fontWeight: 'bold' }} >**end of characters**</div>
                }

                
         
    
            </div>



        </div>
    )
}

export default Home