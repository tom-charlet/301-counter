'use client'

import Avatars from '@/lib/Avatars';

import { createContext, useContext } from 'react';

const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
    const avatars = Avatars()

    return <GlobalContext.Provider value={{
        avatars
    }}>
        {children}
    </GlobalContext.Provider>
}

export const useGlobal = () => useContext(GlobalContext);