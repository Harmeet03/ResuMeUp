import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { profile } from '../services/userAPI';

const PublicRoute = ({ children }) => {
    const [authenticated, setAuthenticated] = useState(false);
    
    useEffect(() => {
        profile()
            .then(() => {
                setAuthenticated(true);
            })
            .catch(() => {
                setAuthenticated(false);
            })
    }, [])

    if(authenticated){
        return <Navigate to='/dashboard' replace />
    }
    
    return children;
}

export default PublicRoute