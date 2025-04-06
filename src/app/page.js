import dynamic from "next/dynamic";
import Image from "next/image";

const Top = dynamic(() => import('../components/Top'))
const Container = dynamic(() => import('../components/Container'))
const Button = dynamic(() => import('../components/Button'))
const Players = dynamic(() => import('../components/Players'))

export default function Home() {
  return <>
    <Top>
      <Image src="/logo.svg" className="h-[48px] w-auto" width={0} height={0} alt="301 Counter" />
    </Top>
    <Container>
      <Button>Nouvelle partie</Button>
      <Players />
    </Container>
  </>
}
