import { useEffect, useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { useSheetContext } from "./useSheetContext";
import toast from "react-hot-toast";

export const useGetSingleCharacter = (id) => {
    const { dispatch } = useSheetContext()
    const { user } = useAuthContext()

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchSingleSheet = async () => {
            if (!user) return

            setLoading(true)
            setError(null)

            try {
                const response = await fetch(`${import.meta.env.VITE_API_URL}/api/character/${id}`, {
                    headers: {'Authorization': `Bearer ${user.token}`}
                })
                const json = await response.json()
                console.log("Single Sheet:", json)

                if(!response.ok) {
                    setError(json.error || 'Something went wrong')
                    toast.error(json.error || 'Something went wrong')
                    return
                }
                if(response.ok) {
                    dispatch({type: 'SET_CURRENT_SHEET', payload: json})
                    setLoading(false)
                    console.log("Single Sheet Finished Loading")
                }
            } catch (error) {
                console.log(error.message)
                setError(error.message)
                toast.error(error.message)
            }
        }
        if (user) fetchSingleSheet();
    }, [user, dispatch, id]);
    return { loading, error };
}