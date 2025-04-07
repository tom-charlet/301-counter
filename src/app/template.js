import dynamic from "next/dynamic";

const Menu = dynamic(() => import('../components/Menu'))

const template = ({ children }) => {
    return <main className="w-full h-dvh bg-black overflow-hidden">
        <div className="w-full max-w-[393px] h-full max-h-[852px] bg-grey-900 mx-auto grid grid-rows-[auto_1fr]">
            {children}
            {/* <Menu /> */}
        </div>
    </main>
}

export default template