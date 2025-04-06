'use client'

import dynamic from "next/dynamic";
import { useUser } from "@/app/context/User";

const Card = dynamic(() => import('./Card'))
const ProfileCard = dynamic(() => import('./Profile/Card'))

const Players = () => {
    const { players } = useUser()

    const handleEdit = (id) => {
        console.log(id)
    }

    return <Card title="Joueurs">
        <div className="flex gap-2 overflow-auto">
            <ProfileCard href="/joueurs/ajouter" placeholder="green" title="Ajouter" icon="add" />
            {players?.length > 0 && players?.map((item, index) => <ProfileCard onClick={() => handleEdit(item.id)} key={index} title={item.pseudo} />)}
        </div>
    </Card>
}

export default Players