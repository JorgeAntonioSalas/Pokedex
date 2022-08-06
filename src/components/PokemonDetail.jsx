import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams} from 'react-router-dom';

const PokemonDetail = () => {

    const [character,setCharacter] = useState();

    const { id } = useParams();


    useEffect(()=>{
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(res=> setCharacter(res.data))

    },[id]);

    console.log(character);

    return (
        <div>
            <h1>{character?.name}</h1>

            <p><b>Type: </b> {character?.types[0].type.name} </p>

            <p><b>Abilities: </b> {character?.abilities[0].ability.name} </p>                

            <p><b>Movements: </b> {character?.moves[0].move.name} </p>

            <img src={character?.sprites?.front_default} alt="" />

        </div>
    );
};

export default PokemonDetail;
