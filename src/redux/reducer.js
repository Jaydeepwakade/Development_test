import { FETCHDATAERROR, FETCHDATAREQUEST, FETCHDATASUCCSES } from "./actions";



const initalstate = {
    data: [],
    loading: false,
    error: ''
}

export const Reducer = (state = initalstate, action) => {
    switch (action.type) {
        case FETCHDATAREQUEST:
            return { ...state, loading: true }
        case FETCHDATASUCCSES:
            return { ...state, data: action.payload, loading: false }

        case FETCHDATAERROR: return { ...state, loading: false, error: action.payload }



        default:  return state
            break;
    }
}