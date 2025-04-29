import { useEffect } from "react";
import { useSheetContext } from "./useSheetContext";
import { useAuthContext } from './useAuthContext'
import toast from 'react-hot-toast'

export const useDeleteCharacter = () => {
    const { dispatch } = useSheetContext()
    const { user } = useAuthContext()

    useEffect(() => {
        const deleteCharacter = async (id) => {
            try {
                const response = await fetch(`${import.meta.env.VITE_API_URL}/api/character/${id}`, {
                    method: 'DELETE',
                    headers: {
                        'Authorization': `Bearer ${user.token}`,
                    },
                })
                
                const json = await response.json()
    
                if(!response.ok) {
                    toast.error(json.error)
                }
                if(response.ok) {
                    toast.success('Character Created')
                    dispatch({type:'DELETE_SHEET', payload:json})
                }
            } catch (error) {
                toast.error(error)
            }
        }
        deleteCharacter()
    }, [user, dispatch])
}
