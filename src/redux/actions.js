
export const API_URL = "http://localhost:3000/details"
export const FETCHDATAREQUEST = "FETCHDATAREQUEST"
export const FETCHDATASUCCSES = "FETCHDATASUCCSES"
export const FETCHDATAERROR = "FETCHDATAERROR"



export const fetchdatareq = () => {
    return { type: FETCHDATAREQUEST }
}

export const fetchDatasuccses = (data) => {
    return { type: FETCHDATASUCCSES, payload: data }
}
export const fetchDataerror = (e) => {
    return { type: FETCHDATAERROR, payload: e }
}

 export const fetchData = () => {
    return async (dispatch) => {
       dispatch( fetchdatareq())
        try {
            const response = await fetch(API_URL)
            const data = await response.json()
           dispatch( fetchDatasuccses(data))
        } catch (error) {
          dispatch(fetchDataerror(error))
        }
    }
}