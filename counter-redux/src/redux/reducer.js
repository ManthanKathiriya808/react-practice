import { DEC_COUNT, INC_COUNT, RESET_COUNT } from "./actionType"


const reducer = (state={count:0},action)=>{

    switch(action.type){

        case INC_COUNT : return{
            ...count,
            count:state.count+1
        }

        case DEC_COUNT : return {
            ...count,
            count:state.count-1
        }
        case RESET_COUNT : return{
            ...count,
            count:0
        }

        default: return state

    }


}

export default reducer