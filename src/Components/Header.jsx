import { useContext } from "react"
import { CartContext } from "./CartContext"
import { BsSun,BsMoon} from "react-icons/bs";
import { Fragment } from 'react';


function Header(){
    const {theme} = useContext(CartContext)
    const {toggleTheme} = useContext(CartContext)
    return(
        <div className="containerHeader">
            <div className="logoHeader"><p>Where in the world?</p></div>
            <div><button onClick={toggleTheme} className="buttonHeader" id={theme}>{theme == "light" ? <Fragment className="sun"> <BsSun className="iconoMode iconSun" ></BsSun>{"Light mode"}</Fragment > :<Fragment className="moon"> <BsMoon className="iconoMode iconMoon"></BsMoon>{"Dark mode"}</Fragment>}</button></div>
        </div>
    )
}

export default Header