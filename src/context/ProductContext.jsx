

import React, {  createContext, useState } from 'react'

 export const Modalcontext = createContext()

function ProductContext({children}) {
    const [product, setproduct] = useState(null)
    const [isModalopen, setisModalopen] = useState(false)


    const Modalopen = (productdata) => {
        setproduct(productdata)
        setisModalopen(true)
    }
    const closeModal = () => {
        setproduct(null),
            setisModalopen(false)
    }

    return (
       <Modalcontext.Provider value={{product ,Modalopen ,closeModal,isModalopen}}>

        {children}
       </Modalcontext.Provider>
  )
}

export default ProductContext