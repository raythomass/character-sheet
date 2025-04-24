import { SheetContext } from "../context/SheetContext";
import { useContext } from "react";

export const useSheetContext = () => {
    const context = useContext(SheetContext)

    if(!context) {
        throw Error('useSheetContext must be used inside a SheetContextProvider')
    }
    
    return context
}
