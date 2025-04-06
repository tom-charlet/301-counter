import dynamic from "next/dynamic";

const Heading = dynamic(() => import('../components/Heading'))

const Card = ({ title, children }) => {
    return <div className="p-4 rounded-xl bg-white flex flex-col gap-4">
        <Heading level="3">{title}</Heading>
        {children}
    </div>
}

export default Card