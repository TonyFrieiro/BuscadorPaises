import { useState } from "react"
import {createContext} from "react"

export const CartContext = createContext()

const CartContextProvider =  ({children}) => {

    const [producto, setProducto] = useState({})

    const goProducto =(e)=>{
        setProducto([])
        setProducto({e})
    }

    return(
        <CartContext.Provider value = {{goProducto,producto}}>
            {children}
        </CartContext.Provider>
    )



}

export default CartContextProvider