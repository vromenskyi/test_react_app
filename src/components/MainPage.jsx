import React from 'react';
import { Link } from 'react-router-dom';

export const MainPage = () => {

    return (
        <>
            <h1>Internet shop</h1>
            <ol>
                <li>
                    <Link to="/users">Users</Link>
                </li>
                <li>
                    <Link to="/requests">Requests</Link>
                </li>
                <li>
                    <Link to="/products">Products</Link>
                </li>
            </ol>
        </>
        );
}