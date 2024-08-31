
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
const fallbackData = [
    {
        id: 1,
        name: "Raju Rassibomb",
        img: "/assets/modalbanner.png",
        otherimg: ["/assets/crackers.png"],
        price: "200",
        description: "This product packs an extra punch...",
        Contents: [
            "10 hand-hurting pieces of rassi bombs",
            "Filled with great pain",
            "Raju’s hopes"
        ],
        shipping: "Before Raju understands that his dreams do not matter."
    },
    {
        id: 2,
        name: "Raju Rassibomb",
        img: "/assets/modalbanner.png",
        otherimg: ["/assets/crackers.png"],
        price: "200",
        description: "This product packs an extra punch...",
        Contents: [
            "10 hand-hurting pieces of rassi bombs",
            "Filled with great pain",
            "Raju’s hopes"
        ],
        shipping: "Before Raju understands that his dreams do not matter."
    }
];

 export const fetchData = () => {
    return async (dispatch) => {
       dispatch( fetchdatareq())
        try {
            const response = await fetch(API_URL)
            const data = await response.json()
           dispatch( fetchDatasuccses(data))
        } catch (error) {
          dispatch(fetchDatasuccses(fallbackData))
        }
    }
}