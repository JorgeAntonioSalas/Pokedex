import React from 'react';
import { useState } from 'react';
import { changeUser } from '../store/slices/user.slice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const UserInput = () => {

    const [userName, setUserName ] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const submit = e =>{
        e.preventDefault();
        dispatch(changeUser(userName))
        navigate("/Pokedex")
    }
    return (

        
        

        
        <form onSubmit={submit}>
            <h1>Bienvenido entrenador,  antes de comenzar ingresa tu nombre !</h1>
            <div>
            <input 
                type="text"
                value={userName}
                onChange={e => setUserName(e.target.value)}         
            />
            <button>Submit</button>
            </div>
        </form>
        
    );
};

export default UserInput;