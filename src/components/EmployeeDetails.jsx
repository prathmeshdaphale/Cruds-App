import React, { useState, useEffect } from 'react';
import { Card, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useParams } from "react-router";
import axios from 'axios';

function EmployeeDetails() {
    const { id } = useParams();
    const [data, setData] = useState({
        first_name: '',
        last_name: '',
        email: ''
    })

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const result = await axios.get(`http://localhost:3001/users/${id}`)
        setData(result.data);
    }

    return (
        <div style= {{width: '35rem', marginTop: '5rem', marginLeft: '30rem',backgroundColor:"lightcyan"}}>
            <Container >
                <Card  style={{backgroundColor:"lightsteelblue",border:"2px solid grey"}}>
                    <Card.Header><h2>Employee Details</h2></Card.Header>
                    <Card.Body>
                        <Card.Text>
                            <ul  className="list-group">
                                <li style={{backgroundColor:"lightyellow"}} className="list-group-item"><b>Id:</b> {id}</li>
                                <li  className="list-group-item"><b>First Name:</b> {data.first_name}</li>
                                <li style={{backgroundColor:"lightyellow"}} className="list-group-item"><b>Last Name:</b> {data.last_name}</li>
                                <li  className="list-group-item"><b>Email:</b> {data.email}</li>
                            </ul>
                        </Card.Text><br/>
                        <Link to= '/'><Button variant="primary">Back to Employee List</Button></Link>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    )
}

export default EmployeeDetails
