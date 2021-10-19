import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

const CreateEmployee = (props) => {
    const [data, setData] = useState({
        first_name: '',
        last_name: '',
        email: ''
    })

    const { first_name, last_name, email } = data;

    const handleChange = (e) => {
        setData({...data,  [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(first_name == '' || last_name == '' || email == '') {
            alert('All fields are required')
        } else {
            await axios.post('http://localhost:3001/users', data);
            props.history.push('/');
        }
    }

    return (
        <div>
            <Container style={{border:"2px solid black",backgroundColor:"burlywood"}}>
                <Form onSubmit={handleSubmit} className= 'mt-1'>
                <h3 style={{backgroundColor:"lightslategray",color:"maroon",padding:"10px"}}>Add Employee</h3>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label style={{color:"purple",fontWeight:"700",fontSize:"20px"}}>First Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter FirstName" name= "first_name" value= {first_name} onChange= {handleChange} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label  style={{color:"purple",fontWeight:"700",fontSize:"20px"}}>Last Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter LastName" name= "last_name" value= {last_name} onChange= {handleChange} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label  style={{color:"purple",fontWeight:"700",fontSize:"20px"}}>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter Email" name= "email" value= {email} onChange= {handleChange} />
                    </Form.Group>

                    <Button variant="info" type="submit" style={{margin:"10px",padding:"15px"}}>Add</Button>
                </Form>
            </Container>
        </div>
    );
}

export default CreateEmployee;
