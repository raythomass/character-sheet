import { createContext, useReducer } from "react";

export const SheetContext = createContext()

export const sheetReducer = ( state, action ) => {
    switch ( action.type ) {
        case "SET_SHEET":
            return {
                sheets: action.payload
            }
    }
}