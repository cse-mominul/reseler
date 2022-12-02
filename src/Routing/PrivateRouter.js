import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../ContextApi/Authcontext';



const PrivateRouter = ({ children }) => {
    const { user } = useContext(AuthContext)
    const location = useLocation()

  

    if (user) {
        return children;
    }

    return <Navigate to="/Login" state={{ from: location }} replace />;

};

export default PrivateRouter;