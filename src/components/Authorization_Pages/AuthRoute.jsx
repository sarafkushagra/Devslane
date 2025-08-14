import React from 'react'
import { Navigate } from 'react-router-dom';

export default function AuthRoute({ user, children }) {
    if (user) {
        return <Navigate to="/" />;
    }
    return children;
}
