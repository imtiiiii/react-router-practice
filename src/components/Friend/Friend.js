import React from 'react';
import { Col, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Friend.css"
const Friend = (props) => {
    const details = props.frienddetails;
    const { id, name, username, email, phone } = details;
    return (
        <Col className=" ">
            <Container className="bg-warning rounded-3 py-5">
                <h1>Name: {name}</h1>
                <h3>username: {username}</h3>
                <h5>email: {email}</h5>
                <h5>contact: {phone}</h5>
                <Link to={`/Friend/${id}`}>
                    <Button variant="outline-info" className="w-25 mt-3">Info</Button>
                </Link>
            </Container>
        </Col>
    );
};

export default Friend;