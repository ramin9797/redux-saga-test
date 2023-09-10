import { DECREASE_COUNT, INCREASE_COUNT } from "../constants";

const initialState = {
    count:0
}
const counter = (store=initialState,payload)=>{
    switch (payload.type) {
        case INCREASE_COUNT:
            return {...store,count:store.count+1}
        case DECREASE_COUNT:
            return {...store,count:store.count-1}
        default:
            return store;
    }
}

export default counter