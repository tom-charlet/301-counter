import dynamic from "next/dynamic";

const Top = dynamic(() => import('../../../components/Top'))
const Container = dynamic(() => import('../../../components/Container'))
const AddPlayer = dynamic(() => import('../../../components/Player/Add'))
const Heading = dynamic(() => import('../../../components/Heading'))
const ButtonIcon = dynamic(() => import('../../../components/ButtonIcon'))

export default function AddPlayerPage() {
    return <>
        <Top>
            <Heading level="2" className="text-white">Nouveau joueur</Heading>
            <ButtonIcon icon="chevron-left" className="absolute left-4 top-1/2 -translate-y-1/2" href="/" />
        </Top>
        <Container>
            <AddPlayer />
        </Container>
    </>
}
