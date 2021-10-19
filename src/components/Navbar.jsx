import React from 'react'
import {Navbar,Container} from "react-bootstrap"

function Navbars() {
    return (
        <div>
            <Container>
                <Navbar expand="lg" style={{backgroundColor:"lightskyblue",textAlign:"center"}}>
                    <Container>
                        <Navbar.Brand style={{color:"darkolivegreen",fontWeight:"600",fontSize:"30px"}} >Company</Navbar.Brand>
                    </Container>
                </Navbar>
            </Container>
        </div>
    )
}

export default Navbars
