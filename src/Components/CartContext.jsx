import { useState } from "react"
import {createContext} from "react"

export const CartContext = createContext()

const CartContextProvider =  ({children}) => {

    const [producto, setProducto] = useState({})

    const [theme, setTheme] = useState("light")
    const toggleTheme = () =>{
        setTheme((curr)=>(curr === "light" ? "dark" : "light"))
    }

    const goProducto =(e)=>{
        setProducto([])
        setProducto({e})
    }

    return(
        <CartContext.Provider value = {{goProducto,producto,theme,toggleTheme}}>
            {children}
        </CartContext.Provider>
    )



}

export default CartContextProvider