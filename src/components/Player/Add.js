'use client'

import dynamic from "next/dynamic";
import { useUser } from "@/app/context/User";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Card = dynamic(() => import('../Card'))
const Input = dynamic(() => import('../Input'))
const Button = dynamic(() => import('../Button'))

const Add = () => {
    const { players, addPlayer } = useUser()
    const [params, setParams] = useState({})
    const router = useRouter()

    const handleAdd = () => {
        const id = (players?.length ?? 0) + 1

        if (params?.pseudo && params.pseudo != "") {
            addPlayer({ id: id, pseudo: params.pseudo })
            router.push('/')
        }
    }

    return <>
        <Card title="Pseudo">
            <Input onChange={e => setParams({ ...params, pseudo: e.target.value })} placeholder="Pseudo" />
            <Button onClick={handleAdd}>Ajouter</Button>
        </Card>
    </>
}

export default Add