import { useState } from "react"
import { useEffect } from "react"
import { Link } from "react-router-dom"
import Select from "react-select"

import Header from "./Header"
import { useContext } from "react"
import { CartContext } from "./CartContext"
import { BsSearch} from "react-icons/bs";



function Catalogo (){

    const {producto} = useContext(CartContext)
    const {goProducto} = useContext(CartContext)
    
    const {theme} = useContext(CartContext)
    const {toggleTheme} = useContext(CartContext)

    const [lista,setLista] = useState([])
    const [listaFiltrada,setListaFiltrada] = useState([])
    const [busqueda,setBusqueda] = useState("")

    const [regionfiltrada,setRegionFiltrada] = useState("")

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

    const filtroRegion = (region) =>{
        let resultadoRegion = lista.filter((elemento)=>{
            if(elemento.region.toLowerCase().includes(region.toLowerCase())){
                return elemento;
            }
        })
        setListaFiltrada(resultadoRegion)
        console.log(resultadoRegion)
    }

    const regionesSelect = [
        {label:"america",value:"america"},
        {label:"europa",value:"europe"},
        {label:"africa",value:"africa"},
        {label:"oceania",value:"oceania"},
        {label:"asia",value:"asia"}
    ]

    const handleSelectChange=(event)=>{
        let regionAFiltrar = (event.value)
        filtroRegion(regionAFiltrar)
    }

    const mostrador = () =>{
        return(
            listaFiltrada.slice(1,11).map(item => (
                <div class="col">
                    <div class="card">
                        <Link to ={"/item/" + item.id} onClick={()=>goProducto(item)} class = "text-decoration-none"> 
                            <img src={item.flags["png"]} class="card-img-top" width="400px" height="200px" alt="" />
                            <div class="card-body">
                                <h5 class="card-title">{item.name.common}</h5>
                                <p class="card-text ">Population: <p>{item.population}</p></p>
                                <p class="card-text">Region: <p>{item.region}</p></p>
                                <p class="card-text">Capital: <p>{item.capital}</p></p>
                            
                            
                            </div>
                        </Link>
                    </div>
                </div>
            )) 
        ) 
            
    }

    

    return(
        <div className="containerCatalogo" id={theme} >
            <Header></Header>
            <div className="containerBuscador">
                <div className="barraBuscador">
                    <button className="buttonBuscador"><BsSearch/></button>
                    <input type="text" placeholder=" Ingresar pais a buscar..." value={busqueda} onChange={handleChange}/>
                </div>
                <div>
                    <Select
                        placeholder="seleccione la region.."
                        className="select"
                        options={regionesSelect}
                        onChange={handleSelectChange}
                    />
                </div>
            </div>
            <div class="row row-cols-1 row-cols-md-4 g-4">
                {   
                    // listaFiltrada.map(item => (
                    //     <div class="col">
                    //         <div class="card">
                    //             <Link to ={"/item/" + item.id} onClick={()=>goProducto(item)} class = "text-decoration-none"> 
                    //                 <img src={item.flags["png"]} class="card-img-top" width="400px" height="200px" alt="" />
                    //                 <div class="card-body">
                    //                     <h5 class="card-title">{item.name.common}</h5>
                    //                     <p class="card-text ">Population: <p>{item.population}</p></p>
                    //                     <p class="card-text">Region: <p>{item.region}</p></p>
                    //                     <p class="card-text">Capital: <p>{item.capital}</p></p>
                                      
                                    
                    //                 </div>
                    //             </Link>
                    //         </div>
                    //     </div>
                    // ))
                    mostrador()   
                }
                
            </div>


        </div>
    )

}

export default Catalogo