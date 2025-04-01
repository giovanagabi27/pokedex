'use client'

import axios from "axios";
import { useState, useEffect } from "react";

function Listagem() {

    const [pokemons, alteraPokemons] = useState([]);

    async function buscaTodosPokemons() {
        const response = await axios.get("https://pokeapi.co/api/v2/pokemon/");
        alteraPokemons(response.data.results);
    }

    useEffect(() => {
        buscaTodosPokemons();
    }, []);

    return ( 
        <div className='px-20'> 
            <h1 className="font-bold p-10 mb-10 text-center text-gray-50 bg-purple-800 text-4xl">
                Lista de Pokémons
            </h1>
            <p className="text-center"><strong>Veja quais são todos os Pokémons</strong></p> 
            <br/>

            <hr/>
            <br/> 

            { pokemons.length > 0 ? (
                <ul>
                    {pokemons.map((i, index) => (
                        <li key={index} className="flex items-center gap-4"> 
                            <br/>
                            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`} alt={i.name} />
                            <br/>
                            <p><strong>{index + 1}</strong> <br/> &#8226; {i.name}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Carregando ...</p>   
            )}
        </div>
    );
}

export default Listagem;
