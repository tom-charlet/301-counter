'use client'

import dynamic from "next/dynamic";
import { useUser } from "@/context/User";
import { useGlobal } from "@/context/Global";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { formatUpperFirst } from "@/utils/format";

const Card = dynamic(() => import('../Card'))
const Input = dynamic(() => import('../Input'))
const Button = dynamic(() => import('../Button'))
const Picture = dynamic(() => import('../Profile/Picture'))

const Add = () => {
    const { players, addPlayer } = useUser()
    const { avatars } = useGlobal()
    const [params, setParams] = useState({})
    const router = useRouter()

    const handleChange = (e) => {
        setParams({ ...params, ...e })
    }

    const handleAdd = () => {
        const id = (players?.length ?? 0) + 1

        if (params?.pseudo && params.pseudo != "" && params.image?.id) {
            addPlayer({ id: id, pseudo: params.pseudo, image: params.image })
            router.push('/')
        }
    }

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
        <Button onClick={handleAdd}>Ajouter</Button>
    </>
}

export default Add