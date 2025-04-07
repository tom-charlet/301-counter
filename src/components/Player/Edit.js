'use client'

import dynamic from "next/dynamic";
import { useUser } from "@/context/User";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { formatUpperFirst } from "@/utils/format";

const Card = dynamic(() => import('../Card'))
const Input = dynamic(() => import('../Input'))
const Button = dynamic(() => import('../Button'))

const Edit = ({ data }) => {
    const { updatePlayer, deletePlayer } = useUser()
    const router = useRouter()
    const [params, setParams] = useState({})

    useEffect(() => {
        setParams(data ?? {})
    }, [data])

    const handleChange = (e) => {
        setParams({ ...params, pseudo: formatUpperFirst(e.target.value ?? "") })
    }

    const handleSave = () => {
        router.push('/')
        updatePlayer(data?.id, params)
    }

    const handleDelete = () => {
        router.push('/')
        deletePlayer(data?.id)
    }

    return <>
        <Card title="Pseudo" contentClassName="px-4">
            <Input value={params?.pseudo ?? ""} onChange={handleChange} placeholder="Pseudo" />
        </Card>
        <Button onClick={handleSave}>Sauvegarder</Button>
        <Button onClick={handleDelete} color="red">Supprimer</Button>
    </>
}

export default Edit