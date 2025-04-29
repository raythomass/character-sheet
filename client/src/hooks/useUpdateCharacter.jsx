import { useEffect } from "react";
import { useSheetContext } from "./useSheetContext";
import { useAuthContext } from './useAuthContext'
import toast from 'react-hot-toast'

export const useUpdateCharacter = () => {
    const { dispatch } = useSheetContext()
    const { user } = useAuthContext()

    useEffect(() => {
        const updateCharacter = async (id, updatedData) => {
            try {
                const response = await fetch(`${import.meta.env.VITE_API_URL}/api/character/${id}`, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${user.token}`,
                    },
                    body: JSON.stringify(updatedData),
                })

                const json = await response.json()

                if(!response.ok) {
                    toast.error(json.error)
                }
                if(response.ok) {
                    toast.success('Character Created')
                    dispatch({type:'UPDATE_SHEET', payload:json})
                }
            } catch (error) {
                toast.error(error)
            }
        }
        updateCharacter()
    }, [user, dispatch])
}