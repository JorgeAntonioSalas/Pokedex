import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CharacterItem from './CharacterItem';

const Pokedex = () => {

    const user = useSelector(state => state.user)

    const [ characters, setCharacters] = useState([]);

    const [characterSearch, setCharacterSearch] = useState("");

    const [type, setType] = useState([]);

    const navigate = useNavigate();

    useEffect (()=>{
        axios.get('https://pokeapi.co/api/v2/pokemon/')
        .then(res=>setCharacters(res.data.results));


        axios.get('https://pokeapi.co/api/v2/type/')
        .then(res => setType(res.data.results))
    },[]);

    console.log(type);

    const Search = (e)=>{
        e.preventDefault();
        navigate(`/Pokedex/${characterSearch}`)
    }

    const filterType = e => {
      //  alert("se seleccionó un tipo "+ e.target.value)
        axios.get(e.target.value)
            .then(res=> setCharacters(res.data.pokemon))
    }

    return (
        <div>
            <h1>Pokedex</h1>
            <p>Welcome <b>{user}</b> to the Pokemon World</p>
            <form onSubmit={Search}>
                <input 
                    type="text" 
                    value={characterSearch}
                    onChange={e => setCharacterSearch(e.target.value)} />
                <button>Search</button>
            </form>

            <select onChange={filterType}>
                <option >Selecciona un tipo</option>
                {
                    type.map(type => (
                        <option value={type.url} key={type.url}>
                            {type.name}
                        </option>
                    ))
                }
            </select>

            <ul>
                {
                    characters.map(character =>(

                        <div key={character.url? character.url : character.pokemon.url}>
                            <CharacterItem 
                                characterUrl={character.url ? character.url : character.pokemon.url} key={character.url}/>
                        </div>
                    ))
                }

            </ul>
        </div>
    );
};

export default Pokedex;