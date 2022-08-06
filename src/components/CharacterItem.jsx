import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CharacterItem = ({characterUrl}) => {

    const [character, setCharacter] = useState({});

    const navigate = useNavigate();

    useEffect(()=>{
        axios.get(characterUrl)
        .then(res=>setCharacter(res.data));

    }, [])

    console.log(character)

    return (
        <div onClick={()=> navigate(`/Pokedex/${character.id}`)}>
            <h3>{character.name}</h3>
            <img src={character.sprites?.front_default} alt="" />

        </div>
    );
};

export default CharacterItem;