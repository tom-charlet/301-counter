'use client'

import { useState } from "react";
import dynamic from "next/dynamic";
import { useUser } from "@/context/User";

const Container = dynamic(() => import('../../components/Container'))
const Card = dynamic(() => import('../Card'))
const Toggle = dynamic(() => import('../Toggle'))
const Tag = dynamic(() => import('../Tag'))

const Settings = () => {
    const { players } = useUser()
    const [params, setParams] = useState({
        gamemode: 1,
        endgame: 1,
        players: []
    })

    const handleUpdatePlayers = (e) => {
        if (params?.players?.find(item => item.id == e.id)) setParams({ ...params, players: params.players.filter(item => item.id != e.id) })
        else setParams({ ...params, players: [...(params?.players ?? []), e] })
    }

    return <Container>
        <Card title="Mode de jeu" contentClassName="px-4">
            <Toggle onChange={(e) => setParams({ ...params, gamemode: e })} name="gamemode" options={[{ title: "301", value: 1 }, { title: "501", value: 2 }]} defaultValue={1} />
        </Card>
        <Card title="Joueurs" contentClassName="px-4">
            <div className="flex flex-wrap items-center gap-2">
                {players?.length > 0 && <ul className="flex items-center flex-wrap gap-2">
                    {players?.map((item, index) => <Tag key={index} onClick={() => handleUpdatePlayers(item)} active={params?.players?.find(player => player.id == item.id)}>{item.pseudo}</Tag>)}
                </ul>}
            </div>
        </Card>
        <Card title="Fin de partie" contentClassName="px-4">
            <Toggle onChange={(e) => setParams({ ...params, endgame: e })} name="endgame" options={[{ title: "Premier", value: 1 }, { title: "Tous", value: 2 }]} defaultValue={1} />
        </Card>
    </Container>
}

export default Settings