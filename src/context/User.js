'use client'

import { createContext, useContext, useEffect, useState } from 'react';

const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
    const [players, setPlayers] = useState([])

    useEffect(() => {
        if (window) {
            let localPlayers = localStorage.getItem("301-players") ?? null

            setPlayers(localPlayers ? JSON.parse(localPlayers) : [])
        }
    }, [])


    const updatePlayers = (e) => {
        setPlayers(e)
        localStorage.setItem("301-players", JSON.stringify(e))
    }

    const addPlayer = (e) => {
        updatePlayers([...players, e])
    }

    const updatePlayer = (id, player) => {
        const items = players.filter(item => item.id != id)

        updatePlayers([...items, player])
    }

    const deletePlayer = (id) => {
        const items = players.filter(item => item.id != id)

        updatePlayers([...items])
    }

    const getPlayer = (id) => players?.find(item => item.id == id) ?? null

    return <UserContext.Provider value={{
        players,
        updatePlayers,
        updatePlayer,
        addPlayer,
        deletePlayer,
        getPlayer
    }}>
        {children}
    </UserContext.Provider>
}

export const useUser = () => useContext(UserContext);