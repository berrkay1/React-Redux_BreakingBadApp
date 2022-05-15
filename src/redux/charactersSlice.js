import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
const charNumber =12;

export const fetchCharacters = createAsyncThunk('characters/getCharacters', async (page) => {
    const res = await axios(`https://www.breakingbadapi.com/api/characters?limit=${charNumber}&offset=${page*charNumber}`);
    return res.data;
});


export const charactersSlice = createSlice({
    name:'characters',
    initialState:{
        items:[],
        status:'idle',
        page:0,
        nextPage:false
        
        
    },
    reducers:{

    },
    extraReducers:{
        [fetchCharacters.pending] : (state,action) => {
            state.status='loading'
        },
        [fetchCharacters.fulfilled] : (state,action) => {
            state.items = [...state.items, ...action.payload];
            state.status='succeeded'
            state.page += 1

            if(state.page > 5){
                state.nextPage = true
            }
        },
        [fetchCharacters.rejected] : (state,action) => {
            state.status='failed'
            state.error= action.error.message;
            
        }
    }

});

export default charactersSlice.reducer;