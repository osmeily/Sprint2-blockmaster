import React, {  useState } from 'react'
import styled from 'styled-components'
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from "react-icons/fa"
import '../../src/styles/slider.css'
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap'
import play from "../resources/Vector (1).png"
import mas from "../resources/mas.png"

const StyledSlider = styled.section`
position: relative;
display: flex;
justify-content: center;
align-items: start;
height: 300px;
overflow: hidden;
`

const StyledImg = styled.div`
    cursor: pointer;
`


const Slider = () => {

    const [slider, setSlider] = useState(0)

    const imgArray = [
        {
            "img": "https://image.tmdb.org/t/p/w1280/70nxSw3mFBsGmtkvcs91PbjerwD.jpg",
            "id": 1
        }
        ,
        {
            "img": "https://image.tmdb.org/t/p/w1280/cinER0ESG0eJ49kXlExM0MEWGxW.jpg",
            "id" : 2
        },
        {
            "img" :  "https://image.tmdb.org/t/p/w1280/g2djzUqA6mFplzC03gDk0WSyg99.jpg",
            "id" : 3
        }
    ]

    const iFrame = 
        {
            0: "https://www.youtube.com/embed/F4Ygcigj0Gk",
            1: "https://www.youtube.com/embed/HjzATzdlN2A",
            2: "https://www.youtube.com/embed/E4dCY_DvT-4"
        }

    const nextSlide = () => {
        setSlider(slider === 2 ? 0 : slider +1)
        console.log(slider)
    }

    const prevSlide = () => {
        setSlider(slider === 0 ? 2 : slider -1)
        console.log(slider)
    }

    const [estado, setEstado] = useState(false)

    const buttonHandler = () => {
        setEstado(current => !current)
        
    }

    return (
        <StyledSlider>
            <Button className='btn' style={{margin: "auto", width: "200px", height: "48px", zIndex: "11", position: "absolute", bottom: "10%", backgroundColor: "#FED941", color: "black", fontWeight: "700", textAlign: "center", left:"32px"}} onClick={buttonHandler}><img style={{padding: "0px 20px"}} src={play} alt=""/>VER AHORA</Button>

            <Button className='btn' style={{margin: "auto", width: "200px", height: "48px", zIndex: "11", position: "absolute", bottom: "10%", backgroundColor: "#0F0E17", color: "#FED941", border: "1px solid #FED941", fontWeight: "700", textAlign: "center", left:"250px"}}><img style={{}} src={mas} alt=""/>VER DESPUÉS</Button>

            <FaArrowAltCircleLeft style={{ position: 'absolute', top: "50%", left : "32px", fontSize: "3rem", color: "#FED941", zIndex: "10", cursor: "pointer", userSelect: "none"}} onClick={prevSlide}/>

            <FaArrowAltCircleRight style={{ position: 'absolute', top: "50%", right: "32px", fontSize: "3rem", color: "#FED941", zIndex: "10", cursor: "pointer", userSelect: "none" }} onClick={nextSlide}/>
            
            <Modal isOpen={estado} size="lg" className='bg-dark'>
                <ModalBody centered>
                    {
<iframe width="720" height="315" src={iFrame[slider]} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
}
                </ModalBody>
                <ModalFooter>
                    <Button onClick={buttonHandler}>Cerrar</Button>
                </ModalFooter>
            </Modal>
        {
            imgArray.map((img, index) => {
        return (
            
            <StyledImg className={index===slider ? 'img active' : 'img'} key={index}>
            
            {index === slider && (<img src={img.img} alt=""/>)}
            
            </StyledImg>
        )
        }
    )
}
    </StyledSlider>
    )
}


export default Slider
