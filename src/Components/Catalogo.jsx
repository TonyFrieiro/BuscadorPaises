import { useState } from "react"
import { useEffect } from "react"
import { Link } from "react-router-dom"


import { useContext } from "react"
import { CartContext } from "./CartContext"




function Catalogo (){

    const {producto} = useContext(CartContext)
    const {goProducto} = useContext(CartContext)


    const [lista,setLista] = useState([])
    const [listaFiltrada,setListaFiltrada] = useState([])
    const [busqueda,setBusqueda] = useState("")


    useEffect(()=>{
        // console.log("use efect")
        obtenerDatos()
        
    },[])

    const obtenerDatos = async()=>{
        const data = await fetch("https://restcountries.com/v3.1/all")
        const paises = await data.json()
        // console.log(paises)
        setLista(paises)
        setListaFiltrada(paises)
        
    }

    let generadorIDS = 0

    lista.forEach(element => {
        Object.defineProperty(element,'id',{
            value : generadorIDS + 1 
        })
        generadorIDS = generadorIDS + 1
    });
    

    const handleChange = e =>{
        setBusqueda(e.target.value)
        filtrar(e.target.value)
    }

    const filtrar = (terminoBusqueda) =>{
        var resultadosBusqueda = lista.filter((elemento)=>{
            if(elemento.name.common.toLowerCase().includes(terminoBusqueda.toLowerCase())){
                return elemento;
            }
        })
        setListaFiltrada(resultadosBusqueda)
    }

    

    return(
        <div className="containerCatalogo">
            <div className="containerBuscador">
                <div>
                    <button>Buscar</button>
                    <input type="text" placeholder="Ingresar pais a buscar" value={busqueda} onChange={handleChange}/>
                </div>
                <div>
                    <select name="Region" id="region">
                        <option value="" disabled selected hidden>Encontrar por region...</option>
                        <option value="america">America</option>
                        <option value="europa">Europa</option>
                        <option value="africa">Africa</option>
                        <option value="oceania">Oceania</option>
                        <option value="asia">Asia</option>
                    </select>
                </div>
            </div>
            <div class="row row-cols-1 row-cols-md-4 g-4">
                {   
                    listaFiltrada.map(item => (
                        <div class="col">
                            <div class="card">
                                <Link to ={"/item/" + item.id} onClick={()=>goProducto(item)} class = "text-decoration-none"> 
                                    <img src={item.flags["png"]} class="card-img-top" width="400px" height="200px" alt="" />
                                    <div class="card-body">
                                        <h5 class="card-title">{item.name.common}</h5>
                                        <p class="card-text ">Population: {item.population}</p>
                                        <p class="card-text">Region: {item.region}</p>
                                        <p class="card-text">Capital: {item.capital}</p>
                                      
                                    
                                    </div>
                                </Link>
                            </div>
                        </div>
                    ))
                    
                }
                
            </div>


        </div>
    )

}

export default Catalogo