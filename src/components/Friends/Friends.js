import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Friend from '../Friend/Friend';

const Friends = () => {
    const [friends, setFriends] = useState([]);
    useEffect(() => {
        fetch("HTTPS://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(data => setFriends(data));
    }, []);
    /*
    1.Now we have all our friend info in friends
    2.Now we'll use another component to show each of the friends details
    */

    return (
        <div className="my-5">
            {
                friends.length ? <h1>I have : {friends.length} friends</h1> : <h1>I have 0 friend</h1>
            }
            <Row xs={1} md={3} className="g-3 my-5">
                {
                    friends.map(friend => <Friend frienddetails={friend} key={friend.id}></Friend>)
                }
            </Row>
        </div>
    );
};

export default Friends;