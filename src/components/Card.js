import dynamic from "next/dynamic";

const Heading = dynamic(() => import('../components/Heading'))

const Card = ({ title, children, contentClassName }) => {
    return <div className="py-4 rounded-xl bg-white flex flex-col gap-4">
        <Heading level="3" className="px-4">{title}</Heading>
        <div className={contentClassName ?? ""}>
            {children}
        </div>
    </div>
}

export default Card