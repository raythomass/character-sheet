import { createContext, useReducer } from "react";

export const SheetContext = createContext()

export const sheetReducer = ( state, action ) => {
    switch ( action.type ) {
        case "SET_SHEET":
            return {
                ...state,
                sheets: action.payload
            }
        case 'CREATE_SHEET':
            return{
                ...state,
                sheets: [action.payload, ...state.sheets]
            }
        case 'DELETE_SHEET':
            return{
                ...state,
                sheets: state.sheets.filter((e) => e._id !== action.payload._id)
            }
        case 'UPDATE_SHEET':
            return {
                ...state,
                sheets: state.sheets.map(sheet =>
                    sheet._id === action.payload._id ? action.payload : sheet
                ),
                currentSheet:
                    state.currentSheet && state.currentSheet._id === action.payload._id
                        ? action.payload
                        : state.currentSheet
            }
        case 'SET_CURRENT_SHEET':
            return {
                ...state,
                currentSheet: action.payload
            }
        default:
            return state
    }
}

export const SheetContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(sheetReducer, {
        sheets: []
    })

    console.log('SheetContext state: ', state)

    return (
        <SheetContext.Provider value={{...state, dispatch}}>
            { children }
        </SheetContext.Provider>
    )
}