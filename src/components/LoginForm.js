import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components';

const Formulario = styled.form`
display:flex;
flex-direction:column;
width:80%;
padding:20px 40px;
align-items:center;
`

const Labels = styled.label`
padding:20px 10px;
text-align:left;
width:100%;
border-radius:10px;
`;

const Inputs = styled.input`
padding:10px 5px;
text-align:left;
width:100%;
border-radius:10px;
`;

const Buttons = styled.input`
padding:10px;
margin:10% 0 5% 0;
width:60%;
border-radius:10px;
background:#FED941;
`;

const Login = ({Login}) => {

    const [datos, setDatos] = useState({email:"", password:""});
    
    const handleSubmit = (e)=>{
        e.preventDefault();
        Login(datos)
    }
    
    
    return (
        <>
            <Formulario onSubmit={handleSubmit}>
                <h1>LOGIN</h1>
                <Labels htmlFor="email">Email:</Labels>
                <Inputs 
                type="email" 
                id="email" 
                placeholder="Ingrese su email"
                onChange={e=>setDatos({...datos, email:e.target.value})} value={datos.email} 
                />

                <Labels htmlFor="password">Contraseña:</Labels>
                <Inputs 
                type="password" 
                id="password" 
                placeholder="Ingrese su Contraseña"
                onChange={e=>setDatos({...datos, password:e.target.value})} value={datos.password} 
                />

                <Buttons 
                type="submit" 
                value="Enviar"
                />


                
            </Formulario>
        </>
    )
}

export default Login