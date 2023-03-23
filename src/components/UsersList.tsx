import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';
import ApiBaseUrl from '../Config';
import { CardGroup } from 'react-bootstrap';
import User from './User';

export type UserModel = {
    id: number,
    first_name: string,
    last_name: string,
    email: string,
    avatar: string
}

type UsersRequestParams = {
    page: number | undefined
}

const UsersList = (props: UsersRequestParams) => {
    const [users, setUsers] = useState<UserModel[]>([]);

    useEffect(() => {
        axios.get(`${ApiBaseUrl}/api/users?page=${props.page}`)
        .then(response => setUsers(response.data.data))
        .catch(error => alert(JSON.stringify(error)))
    }, [props.page]);

    return (
        <CardGroup>
            {users.map(user => (<User key={user.id} {...user}/>))}
        </CardGroup>
    );
}

export default UsersList;
