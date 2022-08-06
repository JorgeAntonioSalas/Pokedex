import { HashRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Pokedex from "./components/Pokedex";
import PokemonDetail from "./components/PokemonDetail";
import ProtectedRoutes from "./components/ProtectedRoutes";
import UserInput from "./components/UserInput";

function App(){

return (
    <HashRouter>
        <Routes>
            <Route path="/" element={<UserInput />} />
            <Route element={<ProtectedRoutes/>}>
                <Route path="/Pokedex" element={<Pokedex />} />
                <Route path="/Pokedex/:id" element={<PokemonDetail />} />
            </Route>         
        </Routes>  
    </HashRouter>
    );
};

 export default App;