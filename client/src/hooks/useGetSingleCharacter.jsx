import { useEffect } from "react";
import { useAuthContext } from "./useAuthContext";
import { useSheetContext } from "./useSheetContext";
import toast from "react-hot-toast";

export const useGetSingleCharacter = (id) => {
    const { dispatch } = useSheetContext()
    const { user } = useAuthContext()

    useEffect(() => {
        const fetchSingleSheet = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_API_URL}/api/character/${id}`, {
                    headers: {'Authorization': `Bearer ${user.token}`}
                })
                const json = await response.json()

                if(!response.ok) {
                    toast.error(json.error || 'Something went wrong')
                }
                if(response.ok) {
                    dispatch({type: 'SET_CURRENT_SHEET', payload: json})
                }
            } catch (error) {
                toast.error(error)
            }
        }
        fetchSingleSheet()
    }, [user, dispatch])
}