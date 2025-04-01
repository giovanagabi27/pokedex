'use client'

import axios from "axios";
import { useState, useEffect } from "react";

function Doguinhos() {
    const [dogs, setDogs] = useState([]);

    async function buscaTodosDogs() {
        try {
            const response = await axios.get("https://dog.ceo/api/breeds/image/random/10");
            setDogs(response.data.message);
        } catch (error) {
            console.error("Erro ao buscar doguinhos:", error);
        }
    }

    useEffect(() => {
        buscaTodosDogs();
    }, []);

    return (
        <div className='bg-[url(https://i.pinimg.com/736x/76/61/ef/7661efaeebdee6f40d5cada4aeddbdbc.jpg)] bg-fixed ..."px-20 bg-teal-300'>
            <h1 className="font-bold p-10 mb-10 text-center text-gray-50 bg-black text-2xl">
                Lista de Doguinhos
            </h1>
            <p className="font-bold p-10 mb-10 text-center text-gray-50 bg-black text-2xl"><strong> 🦴 🐶 Enciclopédia do Au-Au 🐶 🦴 </strong></p> 
            <br/>
            
            <br/>

            {dogs.length > 0 ? (
                <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {dogs.map((dog, index) => (
                        <li key={index} className="flex flex-col items-center gap-2 bg-gray-100 p-4 rounded-lg shadow">
                            <img src={dog} alt={`Cachorro ${index + 1}`} className="w-40 h-40 object-cover rounded-lg" />
                           
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Carregando ...</p>
            )}
        </div>
    );
}

export default Doguinhos;
