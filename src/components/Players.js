'use client'

import dynamic from "next/dynamic";
import { useUser } from "@/context/User";

const Card = dynamic(() => import('./Card'))
const ProfileCard = dynamic(() => import('./Profile/Card'))

const Players = () => {
    const { players } = useUser()

    return <Card title="Joueurs">
        <div className="flex items-center gap-2 overflow-auto hide-scrollbar px-4">
            <ProfileCard href="/joueurs/ajouter" placeholder="green" title="Ajouter" icon="add" />
            {players?.length > 0 && players?.map((item, index) => <ProfileCard href={`/joueurs/${item.id}`} key={index} title={item.pseudo} image={item.image} />)}
        </div>
    </Card>
}

export default Players