import React from 'react';
import { UserModel } from './UsersList';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const User = (userModel: UserModel) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={userModel.avatar} alt={`${userModel.first_name} ${userModel.last_name}`} />
            <Card.Body>
                <Card.Title>{`${userModel.first_name} ${userModel.last_name}`}</Card.Title>
                <Card.Text>{userModel.email}</Card.Text>
                <Button variant="danger">Mail</Button>
            </Card.Body>
        </Card>
    );
}

export default User;