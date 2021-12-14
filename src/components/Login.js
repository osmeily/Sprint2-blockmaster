import React, { useEffect, useState } from 'react'
import axios from 'axios'
import md5 from 'md5'
import LoginForm from './LoginForm'
import {  useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import styled from 'styled-components'

let urlUser = "https://blockmaster.herokuapp.com/usuarios"

const Contenedor = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
text-align:center;
color:white;
width:100%;
`;
const Login = () => {

    const history = useNavigate()

    const [check, setCheck] = useState(false)
    const [datosLogin, setDatosLogin] = useState('')

    const Login = async datos => {
        await axios.get(urlUser, {
            params: {
                email: datos.email,
                password: md5(datos.password)
            }
        })
            .then(respuesta => {
                return respuesta.data
            })
            .then(respuesta => {
                if (respuesta.length > 0) {
                    var res = respuesta[0];
                    Swal.fire(`Bienvenido ${res.nombre} ${res.apellido}`)
                    .then(response=>{
                        console.log(response)
                        if(response.isConfirmed === true){
                            handleRedirect()
                        }
                    });
                    setDatosLogin(respuesta[0])
                    subirData(datosLogin)
                    // 
                } else {
                    Swal.fire({title:'El usuario o la contraseña no son correctos',icon:'warning'});
                }
            })
            .catch(error => {
                console.log(error)
            })
    }

    useEffect(() => {
        subirData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [datosLogin])

    const handleChange = (e) => {
        setCheck(!check)
        console.log(check)
    }

    const handleRedirect = () => {
        history.push('/blockmaster/peliculas')
    }

    const subirData = () => {
        if (check === true) {
            localStorage.setItem('datosSesion',JSON.stringify(datosLogin))
            sessionStorage.removeItem('datosSesion')            
        } else {
            sessionStorage.setItem('datosSesion',JSON.stringify(datosLogin))
            localStorage.removeItem('datosSesion')
        }
    }



    return (
        <Contenedor>
            <LoginForm Login={Login} />
            <span>
                <label htmlFor="valSes">Manetener sesion iniciada</label>
                <input
                    type="checkbox"
                    name=""
                    id="valSes"
                    onChange={handleChange}
                />
            </span>

        </Contenedor>
    )
}

export default Login