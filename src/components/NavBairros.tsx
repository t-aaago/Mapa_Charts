import React, {useState} from 'react';
import './styles/NavBairros.css'
import {Link} from 'react-router-dom';

export const NavBairros = () => {
    
    const [bairroURl, setBairroURL] = useState('')
    
    const HandleClear = () =>{
        setBairroURL('')
    }

    
    return (
        <>
            <input 
                type="search" 
                name="navbar" 
                id="selectBairros"  
                list='bairros'
                placeholder='Selecione um bairro'
                value={bairroURl}
                onChange = {async (e) => {setBairroURL (e.target.value)}}
            />

            <datalist id= "bairros">
                <option value='Jurunas'></option>
                <option value='Guama'></option>
            
            </datalist>

            <Link to={bairroURl}>
                <button onClick={HandleClear} id='pesquisaButton'> Pesquisar </button>
            </Link>

            

            
        </>
    )
}