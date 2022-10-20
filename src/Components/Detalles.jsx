import { useContext } from "react"
import { CartContext } from "./CartContext"
import { Link } from "react-router-dom"
import { useState } from "react"
import { useEffect } from "react"

function Detalles(){
    const {goProducto} = useContext(CartContext)
    const {producto} = useContext(CartContext)
    

    let border= (producto.e.borders)
    let paisName = (producto.e.name.common)
    let paisIMG = (producto.e.flags["png"])
    let paisPopulation = (producto.e.population)
    let paisRegion = (producto.e.region)
    let paisSubregion = (producto.e.subregion)
    let paisCapital = (producto.e.capital[0])
    let paisTLD = (producto.e.tld[0])
    
    
    
    return(
        <div>
            <Link to ={"/"} className="btn btn-primary detallesGoBack">  Go Back </Link>
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