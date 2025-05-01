import { useState, useEffect } from "react";
import { useSheetContext } from "./useSheetContext";
import { useAuthContext } from "./useAuthContext";
import toast from "react-hot-toast";

export const useGetAllCharacters = () => {
    const { dispatch } = useSheetContext()
    const { user } = useAuthContext()

    useEffect(() => {
        const fetchAllSheets = async () => {
            if (!user) return

            try {
                const response = await fetch(`${import.meta.env.VITE_API_URL}/api/character`, {
                    headers: {
                        'Authorization': `Bearer ${user.token}`
                      }
                })

                const json = await response.json()
                console.log(json.data)

                if(!response.ok) {
                    toast.error(json.error || "Something went wrong");
                }
                
                if(response.ok) {
                    dispatch({type:'SET_SHEET', payload: json.data})
                }
            } catch (error) {
                toast.error(error.message);
            }
        }
        fetchAllSheets()
    }, [user, dispatch])
}


