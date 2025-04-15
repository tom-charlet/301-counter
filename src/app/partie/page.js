import dynamic from "next/dynamic";

const Top = dynamic(() => import('../../components/Top'))
const Settings = dynamic(() => import('../../components/Game/Settings'))
const Heading = dynamic(() => import('../../components/Heading'))
const ButtonIcon = dynamic(() => import('../../components/ButtonIcon'))

export default function AddPlayerPage() {
    return <>
        <Top>
            <Heading level="2" className="text-white">Nouvelle Partie</Heading>
            <ButtonIcon icon="chevron-left" className="absolute left-4 top-1/2 -translate-y-1/2" href="/" />
        </Top>
        <Settings />
    </>
}
