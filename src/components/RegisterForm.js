import React, {useState} from 'react'

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

const RegisterForm = ({Registro}) => {
    // const history = useNavigate()


    const [datos,setDatos] = useState({
        nombre: '',
        apellido: '',
        email: '',
        username: '',
        password: ''
    })

    const handleSubmit = (e)=>{
        e.preventDefault();
        Registro(datos)
    }

    // const handleRedirect = () => {
    //     history.push('/blockmaster/')
    // }

    
    
    return (
        <>
            <Formulario onSubmit={handleSubmit}>
            <h1>REGISTRO</h1>

                <Labels htmlFor="nombre">Nombre</Labels>
                <Inputs
                    type="text"
                    name="nombre"
                    id="nombre"
                    placeholder="Ingrese su nombre completo"
                    required=""
                    onChange={e=>setDatos({...datos, nombre:e.target.value})} value={datos.nombre}
                />

                <Labels htmlFor="apellido">Apellido</Labels>
                <Inputs
                    type="text"
                    name="apellido"
                    id="apellido"
                    placeholder="Ingrese su apellido completo"
                    required=""
                    onChange={e=>setDatos({...datos, apellido:e.target.value})} value={datos.apellido}
                />

                <Labels htmlFor="Email">Email</Labels>
                <Inputs
                    type="email"
                    name="Email"
                    id="Email"
                    placeholder="Ingrese su Email"
                    required=""
                    onChange={e=>setDatos({...datos, email:e.target.value})} value={datos.email}
                />

                <Labels htmlFor="password">Contraseña</Labels>
                <Inputs
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Ingrese su Contraseña"
                    required=""
                    onChange={e=>setDatos({...datos, password:e.target.value})} value={datos.password}
                />

                <Labels htmlFor="password">Imagen de perfil</Labels>
                <Inputs
                    type="file"
                    name="password"
                    id="password"
                    placeholder="Ingrese su Contraseña"
                    required=""
                    
                />

                <Buttons
                    type="submit" 
                    value="Registrarme"
                />

            </Formulario>
        </>
    )
}

export default RegisterForm