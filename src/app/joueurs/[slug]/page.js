import dynamic from "next/dynamic";

const Player = dynamic(() => import('../../../components/Player/index'))

export default async function PlayerPage({ params }) {
    const data = await params
    
    return <Player id={data.slug} />
}