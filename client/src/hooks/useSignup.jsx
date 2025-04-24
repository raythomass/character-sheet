import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import toast from "react-hot-toast";

export const useSignup = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const { dispatch } = useAuthContext()

    const signup = async (username, password) => {
        setError(null)
        setIsLoading(null)

        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/user/signup`, {
                method: 'POST',
                body: {'Content-Type': 'application/json'},
                body: JSON.stringify({username, password})
            })

            const json = await response.json()

            if(!response.ok) {
                setIsLoading(false)
                setError(json.error || "Something went wrong");
                toast.error(json.error || "Something went wrong");
            }

            if(response.ok){
                localStorage.setItem('user', JSON.stringify(json))

                dispatch({type: 'LOGIN', payload: json})
    
                setIsLoading(false)
                toast.success('Signup Successful')
            }

        } catch (error) {
            setError("Network error or server unavailable");
            toast.error("Network error or server unavailable");
        }
    }
    return {signup, error, isLoading}
}