
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


const ApiKey = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDdkZDIyOTM5N2RmMTAwMTRkZGRkYjgiLCJpYXQiOjE2ODc0MjM1OTIsImV4cCI6MTY4ODYzMzE5Mn0.zshdAertgqrJND9BmOfjOUW4RU_gpklt_9AZzOtUPUU"

 export const fetchCommenti = createAsyncThunk(
  'commenti/fetchCommenti',
  async (asin) => {
    const response = await fetch("https://striveschool-api.herokuapp.com/api/comments/"+asin, {
      headers: {
        Authorization: ApiKey
      }
    })
    const data = await response.json()
    return data
  }
)



const initialState = {
  apiArray: [],
  originalArray: [],
  reviewArray: [],  
  categoria: "",

};

const apiSlice = createSlice({
  name: 'api',
  initialState,
  reducers: {
    apiCall: (state, action) => {
      state.apiArray = action.payload;
      
    },
    setOriginal: (state, action) => {
      state.originalArray = action.payload;
    },
    setCategory: (state, action) => {
      state.categoria = action.payload;
    },
    setSearch: (state, action) => {
      const search = action.payload;
      state.apiArray = state.originalArray.filter((item) => {
        return item.title.toLowerCase().includes(search.toLowerCase());
      })
    },
    openModal: (state, action) => {
      const index = action.payload;
      state.apiArray[index].modal = !state.apiArray[index].modal;
    },
    setSelected: (state, action) => {
      const index = action.payload;
      state.apiArray[index].selected = !state.apiArray[index].selected;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCommenti.fulfilled, (state, action) => {
      state.reviewArray = action.payload
    })
    
    builder.addCase(fetchCommenti.pending, (state, action) => {
      state.reviewArray = []
    })
  }

});


export const { apiCall,setCategory,setSearch,openModal, setOriginal, setSelected } = apiSlice.actions;
export default apiSlice.reducer;