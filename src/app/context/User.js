'use client'

import { createContext, useContext, useEffect, useState } from 'react';
import { formatDefault } from '@/utils/format';

const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
    const [players, setPlayers] = useState([])

    useEffect(() => {
        if (window) {
            setPlayers(JSON.parse(formatDefault(localStorage.getItem("301-players"), [])))
        }
    }, [])

    const updatePlayers = (e) => {
        setPlayers(e)
        localStorage.setItem("301-players", JSON.stringify(e))
    }

    const addPlayer = (e) => {
        updatePlayers([...players, e])
    }

    return <UserContext.Provider value={{
        players,
        updatePlayers,
        addPlayer
    }}>
        {children}
    </UserContext.Provider>
}

export const useUser = () => useContext(UserContext);