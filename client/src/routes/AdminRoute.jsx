import { Navigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { profile } from '../services/userAPI'

const AdminRoute = ({ children }) => {
    const [isAdmin, setIsAdmin] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        profile()
            .then((res) => {
                if(res?.role === 'admin'){
                    setIsAdmin(true)
                }
                else{
                    setIsAdmin(false)
                }
                setLoading(false)
            })
            .catch(() => {
                setIsAdmin(false)
                setLoading(false)
            })
    }, [])

    if(loading){
        return(
            <div className="flex flex-row items-center justify-center h-screen gap-4">
                <span className="border-6 border-white border-y-cyan-700 w-15 h-15 rounded-full animate-spin"/>
                <p className="text-4xl"> Loading... </p>
            </div>
        )
    }

    if(!isAdmin){
        return <Navigate to="/dashboard" replace />
    }

    return children
}

export default AdminRoute