'use client'
import axios from "axios";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
    const[pokemons, alteraPokemons] = useState({})
    const [pesquisa, alteraPesquisa] =useState("")


    async function buscaPokemon(){
       const response = await  axios.get("https://pokeapi.co/api/v2/pokemon/" + pesquisa)
       console.log(response)
       alteraPokemons(response.data)

    }

    async function proximoPokemon( proximo ){
        const proximoID = parseInt(pokemons.id) + (proximo == true ? 1 : -1) ;
        const response = await axios.get("https://pokeapi.co/api/v2/pokemon/" + proximoID)
        alteraPokemons(Response.data)
    }   
 



    return (
        <div className="p-10">
            <h1 className=" font-bold p-10 mb-10  text-center text-indigo-black bg-purple-800 text-4xl ">Pokédex</h1>
            <p className="font-bold  text-center ">Os melhores Pokémons estão aqui</p>

            <br/>
            
            <hr/>

            <br/>

            <form  onSubmit={ (e)=> { e.preventDefault(); buscaPokemon() } } >
            <p ><strong> Digite o nome de um Pokémon: </strong></p>
            <input onChange={ (e)=> alteraPesquisa(e.target.value)  } className="border my-5 " />
            <br/>
            <button className=" font-bold mg-10 border p-1 mb-10 text-gray-50 bg-purple-600 text-1xl">Pesquisar</button>
            </form>

            {
                pokemons.name ?
            <div>
                <img src={pokemons.sprites.other.showdown.front_default}/>
                <h2>{pokemons.name}</h2>
                <p>Tipo {pokemons.types[0]. type.name} </p>
                <br/>

            <button onClick={()=> proximoPokemon(false)}  className=" font-bold mg-10 border p-1 mb-10 text-gray-50 bg-purple-600 text-1xl">Antes</button>
            <button onClick={()=> proximoPokemon(true)}  className=" font-bold mg-10 border p-1 mb-10 text-gray-50 bg-purple-600 text-1xl">Próximo</button>

            </div>
            :  
            <p >Carregando...</p> // colocar um gif de loading...

            }

        </div>
    );
}
