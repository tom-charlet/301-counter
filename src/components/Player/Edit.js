'use client'

import dynamic from "next/dynamic";
import { useUser } from "@/context/User";
import { useGlobal } from "@/context/Global";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { formatUpperFirst } from "@/utils/format";

const Card = dynamic(() => import('../Card'))
const Input = dynamic(() => import('../Input'))
const Button = dynamic(() => import('../Button'))
const Picture = dynamic(() => import('../Profile/Picture'))

const Edit = ({ data }) => {
    const { updatePlayer, deletePlayer } = useUser()
    const { avatars } = useGlobal()
    const router = useRouter()
    const [params, setParams] = useState({})

    useEffect(() => {
        setParams(data ?? {})
    }, [data])

    const handleChange = (e) => {
        setParams({ ...params, ...e })
    }

    const handleSave = () => {
        router.push('/')
        updatePlayer(data?.id, params)
    }

    const handleDelete = () => {
        router.push('/')
        deletePlayer(data?.id)
    }

    console.log(params)

    return <>
        <Card title="Pseudo" contentClassName="px-4">
            <Input value={params?.pseudo ?? ""} onChange={e => handleChange({ pseudo: formatUpperFirst(e.target.value ?? "") })} placeholder="Pseudo" />
        </Card>
        <Card title="Avatar">
            <div className="flex flex-col gap-2">
                {avatars?.map((group, a) => <ul key={a} className="flex items-center gap-2 overflow-auto px-4">
                    {group?.items?.map((item, b) => <li key={b} className="flex">
                        <Picture onClick={() => handleChange({ image: item })} url={item.url} alt={item.title} border active={params?.image?.id == item.id} />
                    </li>)}
                </ul>)}
            </div>
        </Card>
        <Button onClick={handleSave}>Sauvegarder</Button>
        <Button onClick={handleDelete} color="red">Supprimer</Button>
    </>
}

export default Edit