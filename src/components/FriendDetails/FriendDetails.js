import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';

const FriendDetails = () => {
    let home = useHistory();
    const { FriendId } = useParams();
    const [details, setDetails] = useState({});
    const url = `HTTPS://jsonplaceholder.typicode.com/users/${FriendId}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setDetails(data));

    }, [])
    const { name, phone, website, username } = details;

    const goToHome = () => {

        home.push("../friends");
    }
    return (
        <div className="mt-5">
            <Container >
                <Row md={2} xs={1}>
                    <Col className="border border-danger">
                        <h5> Name: {name}</h5>
                    </Col>
                    <Col className="border border-danger">
                        <h5> Phone: {phone}</h5>
                    </Col>
                    <Col className="border border-danger">
                        <h5>Webiste: {website}</h5>
                    </Col>
                    <Col className="border border-danger">
                        <h5>Username: {username}</h5>
                    </Col>
                    <Col className="border border-danger">
                        <h5>Street: {details?.address?.street}</h5>
                    </Col>
                    <Col className="border border-danger">
                        <h5>City: {details?.address?.city}</h5>
                    </Col>
                </Row>
                <Button onClick={goToHome} className="mt-5">Go to friendlist</Button>
            </Container>
        </div>
    );
};

export default FriendDetails;