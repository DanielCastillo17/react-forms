import React, { useState } from 'react';
//import './index.style.css'
//import aeropuertoimage from '././img/aeropuerto.jpg'
//import aeropuertoimagetwo from '././img/aeropuerto-internacional.jpg'

import TablaVuelos from './vuelos/paises/tabla-vuelos/vuelos-table.comp';

const VuelosPag = () => {
    const [nombreContinente, setNombreContinente] = useState('c1');
    const [nombrePais, setNombrePais] = useState('');
    const [nombreCiudad, setNombreCiudad] = useState('');
    const [precio, setPrecio] = useState(0);
    const [fecha, setFecha] = useState('20/04/21');

    const agregarVuelo = (event) =>{
        event.preventDefault();
        console.log('nombreContinente: ' + nombreContinente);
        console.log('nombrePais: ' + nombrePais);
        console.log('nombreCiudad: ' + nombreCiudad);
        console.log('precio: ' + precio);
    }


    let vuelosList = [
            {
                id:"v1",
                name:'Vuelos LatinoAmérica',
                paises:[
                    { 
                        id:"v1p1",
                      paisNombre:"Brasil" ,
                      ciudades:[
                        {   
                            id:"v1p1c1",
                           nombreCiudad:'Rio de Janeiro',
                           precio: '$340000',
                           fecha:'14 Junio',
                        },
                        {   
                            id:"v1p1c2",
                            nombreCiudad:'Sao Paulo',
                            precio: '$450000',
                            fecha:'17 abril',
                         },
                         {   
                            id:"v1p1c3",
                            nombreCiudad:'Manaos',
                            precio: '$640000',
                            fecha:'01 Julio',
                         },
                         {   
                            id:"v1p1c4",
                            nombreCiudad:'Belo Horizonte',
                            precio: '$170000',
                            fecha:'25 julio',
                         },
                         {   
                            id:"v1p1c5",
                            nombreCiudad:'Curitiba',
                            precio: '$650000',
                            fecha:'18 mayo',
                         },
                         {   
                            id:"v1p1c6",
                            nombreCiudad:'Porto Alegre',
                            precio: '$1000000',
                            fecha:'15 julio',
                         },
                         {   
                            id:"v1p1c7",
                            nombreCiudad:'Brasilia',
                            precio: '$900000',
                            fecha:'09 Mayo',
                         },
                         {   
                            id:"v1p1c8",
                            nombreCiudad:'Belem',
                            precio: '$760000',
                            fecha:'24 Agosto',
                         },
                        ]  
                    }   
                ]
            },
            {   
                id:"",
                name:'Vuelos Europa',
                paises:[
                    {
                    id:"v2p2",
                    paisNombre:"Inglaterra" ,
                    ciudades:[
                      {  
                        id:"v2p2c1",
                         nombreCiudad:'Londres',
                         precio: '$430000',
                         fecha:'17 Septiembre',
                      },
                      {
                        id:"v2p2c2",
                          nombreCiudad:'Manchester',
                          precio: '$1000000',
                          fecha:'30 Julio',
                       },
                       {  
                        id:"v2p2c3",
                         nombreCiudad:'Liverpool',
                         precio: '$760000',
                         fecha:'07 Agosto',
                      },
                      {
                        id:"v2p2c4",
                          nombreCiudad:'Bristol',
                          precio: '$560000',
                          fecha:'12 Julio',
                       },
                       {
                        id:"v2p2c5",
                          nombreCiudad:'Leeds',
                          precio: '$870000',
                          fecha:'28 Octubre',
                       },
                       {
                        id:"v2p2c6",
                          nombreCiudad:'Bath',
                          precio: '$290000',
                          fecha:'16 Noviembre',
                       },
                       {
                        id:"v2p2c7",
                          nombreCiudad:'York ',
                          precio: '$980000',
                          fecha:'25 Agosto',
                       },
                       {
                        id:"v2p2c8",
                          nombreCiudad:'Cambridge',
                          precio: '$650000',
                          fecha:'04 Noviembre',
                       },
                    ]
                }
            ]
        }
    ];

    return(
    <div>
        
        <header>
            <h1 className="titulo">Aeropuerto Juscelino Kubitschek </h1>
        </header>

        <div className="nav-color">
            <nav className="navegacion-principal contenedor">
                
                <a>Ofertas De Vuelos</a>
                
            </nav>
        </div> 

            <TablaVuelos vuelosList={vuelosList}/>
    
         
        <main className="contenedor2 sombra">
            <section>
                <h2>Crear Vuelo</h2>
                <form className="formulario">
                    <fieldset>
                        <legend>Llena todos los campos</legend>
                        <div className="contenedor-campos">
                        <div className="campo">
                        <label> Continente </label>
                        </div>
                        <div className="campo">
                            <select value={nombreContinente}
                            onChange={(event)=>{
                                console.log(event.target.value);
                                setNombreContinente(event.target.value);
                            }}
                            className="input-text">
                           <option value="c1">LatinoAmerica</option>
                           <option value="c2">Europa</option>
                           </select></div>
                            
                        <div className="campo">
                            <label > Nombre Pais</label>
                            <input className="input-text" 
                            type="text" 
                            value={nombrePais}
                            onChange={(event)=>{
                                setNombrePais(event.target.value);
                            }}
                            placeholder="Nombre país"/>
                            </div>

                        <div className="campo">
                            <label > Nombre ciudad</label>
                            <input value={nombreCiudad}
                            onChange={(event)=>{
                                setNombreCiudad(event.target.value);
                            }}
                            className="input-text" type="text" placeholder="Nombre ciudad"/>
                        </div>
                
                        <div className="campo">
                             <label>Precio</label>
                            <input value={precio}
                            onChange={(event)=>{
                                setPrecio(event.target.value);
                            }}
                            className="input-text" type="number" placeholder="Precio vuelo"/>
                        </div>
                
                        <div className="campo">
                            <label>Fecha</label>
                            <input className="input-text" type="date" placeholder="Fecha vuelo"/>
                        </div>
                
                    </div>

            <div className="alinear-derecha flex">
                <input onClick={agregarVuelo}
                 className="boton w-100" type="submit" value="Crear"/>
            </div>

                    </fieldset>

                </form>
            </section>
        </main>
    </div> 
    )   
}

export default VuelosPag;