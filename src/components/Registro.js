import React from 'react'
import Swal from 'sweetalert2'
import axios from 'axios'
import md5 from 'md5'
import uuid from 'react-uuid'
import RegisterForm from './RegisterForm'
import styled from 'styled-components'
import {Navigate} from "react-router-dom"


const Register = () => {

    
const Contenedor = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
text-align:center;
color:white;
width:100%;
`;

    // const history = useNavigate()

    // const [user, setUser] = useState({
    //     id: '',
    //     nombre: '',
    //     apellido: '',
    //     email: '',
    //     username: '',
    //     password: ''
    // })
    let urlUser = "https://blockmaster.herokuapp.com/usuarios"
    // const [error, setError] = useState('')

    const Registro = async datos => {
        console.log(datos)
        await axios.post(urlUser, {
            id: uuid,
            nombre: datos.nombre,
            apellido: datos.apellido,
            email: datos.email,
            username: datos.username,
            password: md5(datos.password),
            ImgPerfil: datos.ImgPerfil
        }).then(Respuesta => {
            Swal.fire(`Usuario registrado con exito`)
                    .then(response=>{
                        console.log(response)
                        if(response.isConfirmed === true)( 
                            <Navigate to="/"/>
                        )
                    });
        }).catch(error => {
            console.log(error.message);
        })
    }
    
    return (
        
            <Contenedor>
                <RegisterForm Registro={Registro}/>
            </Contenedor>
        
    )
}

export default Register