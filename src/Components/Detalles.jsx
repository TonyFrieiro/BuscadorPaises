import { useContext } from "react"
import { CartContext } from "./CartContext"
import { Link } from "react-router-dom"
import { useState } from "react"
import { useEffect } from "react"
import Header from "./Header"
import { BsArrowLeft} from "react-icons/bs";


function Detalles(){
    const {goProducto} = useContext(CartContext)
    const {producto} = useContext(CartContext)

    const {theme} = useContext(CartContext)
    const {toggleTheme} = useContext(CartContext)
    

    let border= (producto.e.borders)
    let paisName = (producto.e.name.common)
    let paisIMG = (producto.e.flags["png"])
    let paisPopulation = (producto.e.population)
    let paisRegion = (producto.e.region)
    let paisSubregion = (producto.e.subregion)
    let paisCapital = (producto.e.capital[0])
    let paisTLD = (producto.e.tld[0])
    
    
    
    return(
        <div className="contenedorContenedorDetalles" id={theme}>
            <Header></Header>
            <Link to ={"/"} className="btn btn-primary detallesGoBack"><BsArrowLeft/>  Go Back </Link>
            <div className="contenedorDetalles">
                <div>
                    <img src={paisIMG} alt="" />
                </div>
                <div>
                    <h2 >{paisName}</h2>
                    <p>Native name: </p>
                    <p>Population: {paisPopulation}</p>
                    <p>Region: {paisRegion}</p>
                    <p>SubRegion: {paisSubregion}</p>
                    <p>Capital: {paisCapital}</p>
                    <p>Top Level Domain: {paisTLD}</p>
                    <p>Currencies: </p>
                    <p>Lenguages:</p>
                </div>
                <div>
                    <p>Border countries: {border}</p>
                </div>
            </div>
        </div>
    )
}

export default Detalles