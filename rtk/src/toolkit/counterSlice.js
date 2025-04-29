import { createSlice } from "@reduxjs/toolkit";


let initialState = {
    count:0
}

const counterSlice = createSlice({

    name:"counter",
    initialState,
    reducers :{

        inCount:(state)=>{
            state.count++
        },

        desCount:(state)=>{
            state.count--
        },

        resetCount :(state)=>{
            state.count = 0
        }
    }

})



export const {inCount,desCount,resetCount} = counterSlice.actions
export default counterSlice.reducer