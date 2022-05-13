import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { fetchCharacters } from '../redux/charactersSlice';
import Masonry from 'react-masonry-css'
import '../pages/syless.css'
import Loading from '../components/Loading';
import Error from '../components/Error';


function Home() {
    const characters = useSelector((state) => state.characters.items);
    const isLoading = useSelector((state) => state.characters.isLoading);
    const error = useSelector((state) => state.characters.error);

    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(fetchCharacters())
    }, [dispatch])


    if(isLoading){
        return <Loading/>
    }
    if(error){
        return <Error message={error}/>
    }

    

    return (
        <div>
            <h1>characters</h1>
            <Masonry
                breakpointCols={4}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column">
                {characters.map(item => (
                <div key={item.char_id}>
                    <img style={{width:'100%'}} src={item.img} alt={item.name} />
                    <div className='char-name'>{item.name}</div>
                </div>
            ))}
            </Masonry>
            
        </div>
    )
}

export default Home