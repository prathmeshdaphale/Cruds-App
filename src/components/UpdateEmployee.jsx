import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useParams } from "react-router";

const UpdateEmployee = (props) => {
    const { id } = useParams();
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
        await axios.put(`http://localhost:3001/users/${id}`, data);
        props.history.push('/');
    }

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const result = await axios.get(`http://localhost:3001/users/${id}`);
        setData(result.data);
    }

    return (
        <div>
            <Container style={{border:"2px solid black",backgroundColor:"lightyellow"}}>
                <Form onSubmit={handleSubmit} className= 'mt-4'>
                <h3 style={{backgroundColor:"lightslategray",color:"maroon",padding:"10px"}}>Update Employee</h3>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label  style={{color:"navy",fontWeight:"700",fontSize:"20px"}}>First Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter FirstName" name= "first_name" value= {first_name} onChange= {handleChange} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label style={{color:"navy",fontWeight:"700",fontSize:"20px"}}>Last Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter LastName" name= "last_name" value= {last_name} onChange= {handleChange} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label style={{color:"navy",fontWeight:"700",fontSize:"20px"}}>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter Email" name= "email" value= {email} onChange= {handleChange} />
                    </Form.Group>

                    <Button style={{margin:"10px",padding:"15px"}} variant="warning" type="submit">Update</Button>
                </Form>
            </Container>
        </div>
    );
}

export default UpdateEmployee;
