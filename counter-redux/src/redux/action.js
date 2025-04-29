import { DEC_COUNT, INC_COUNT, RESET_COUNT } from "./actionType"

export const inCount = ()=>{
    return{ type: INC_COUNT}
}


export const decCount = ()=>{
    return{type: DEC_COUNT}
}


export const resetCount = ()=>{
    return{type: RESET_COUNT}
}