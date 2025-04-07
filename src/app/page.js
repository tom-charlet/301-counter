import dynamic from "next/dynamic";

const Top = dynamic(() => import('../components/Top'))
const Container = dynamic(() => import('../components/Container'))
const Button = dynamic(() => import('../components/Button'))
const Players = dynamic(() => import('../components/Players'))

export default function Home() {
  return <>
    <Top>
      <img src="/logo.svg" className="h-[48px] w-auto" alt="301 Counter" />
    </Top>
    <Container>
      <Button>Nouvelle partie</Button>
      <Players />
    </Container>
  </>
}
