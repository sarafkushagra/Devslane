import React from 'react'
import { Navigate } from 'react-router-dom';
import { UserContext } from '../../App';
import { useContext } from 'react';

export default function AuthRoute({ children }) {
    const { user } = useContext(UserContext);
    if (user) {
        return <Navigate to="/" />;
    }
    return children;
}
