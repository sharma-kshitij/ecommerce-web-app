import { createContext, useReducer } from "react"
import { reducer } from "./reducer"

export const GlobalContext = createContext()

export const GlobalState = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, [])

    const GLOBALS = [state, dispatch]


    return (
        <GlobalContext.Provider value={GLOBALS}>
            {children}
        </GlobalContext.Provider>
    )
}