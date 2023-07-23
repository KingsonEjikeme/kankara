"use client"
import { createContext } from "react";

type GlobalData = {
    username: string
}
const initialValues:GlobalData = {
    username: ""
}
export const GlobalContext = createContext(initialValues);



export default function GlobalState({children}:{children:React.ReactNode}){
    return(
        <GlobalContext.Provider value={initialValues}>
            {children}
        </GlobalContext.Provider>
    )
}