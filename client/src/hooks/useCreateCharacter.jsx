import { useEffect } from "react";
import { useAuthContext } from "./useAuthContext";
import { useSheetContext } from "./useSheetContext";
import toast from "react-hot-toast";

export const useCreateCharacter = () => {
    const { dispatch } = useSheetContext()
    const { user } = useAuthContext()

    useEffect(() => {
        const createCharacter = async (sheetData) => {
            try {
                const response = await fetch(`${import.meta.env.VITE_API_URL}/api/character`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${user.token}`,
                      },
                    body: JSON.stringify(sheetData)
                })
    
                const json = await response.json()
    
                if(!response.ok) {
                    toast.error(json.error)
                }
                if(response.ok) {
                    toast.success('Character Created')
                    dispatch({type:'CREATE_SHEET', payload:json})
                }
            } catch (error) {
                toast.error(error)
            }
        }
        createCharacter()
    }, [user, disptach])
}