"use client"
import { createContext, useState } from "react";

type TGlobalState = {
    children: React.ReactNode;
    showNavModal: boolean;
    setShowNavModal:(a:boolean) => void;
};

const initialState = {
    showNavModal: false,
    setShowNavModal: (a:boolean)=> {}
};
export const GlobalContext = createContext(initialState);



export default function GlobalState({children}:TGlobalState){
    const [showNavModal, setShowNavModal]= useState<boolean>(false);
    return(
        <GlobalContext.Provider value={{
            showNavModal,
            setShowNavModal
        }}>
            {children}
        </GlobalContext.Provider>
    )
}