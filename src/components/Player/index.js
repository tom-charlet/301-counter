'use client'

import { useUser } from "@/context/User";
import dynamic from "next/dynamic";
import { formatUpperFirst } from "@/utils/format";

const Top = dynamic(() => import('../../components/Top'))
const Container = dynamic(() => import('../../components/Container'))
const Heading = dynamic(() => import('../../components/Heading'))
const ButtonIcon = dynamic(() => import('../../components/ButtonIcon'))
const Edit = dynamic(() => import('../../components/Player/Edit'))

const Player = ({ id }) => {
    const { getPlayer } = useUser()
    const player = getPlayer(id)

    return <>
        <Top>
            <Heading level="2" className="text-white">{formatUpperFirst(player?.pseudo)}</Heading>
            <ButtonIcon icon="chevron-left" className="absolute left-4 top-1/2 -translate-y-1/2" href="/" />
        </Top>
        <Container>
            <Edit data={player} />
        </Container>
    </>
}

export default Player