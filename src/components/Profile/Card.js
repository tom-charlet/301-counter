
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";

const Heading = dynamic(() => import('../Heading'))
const Icon = dynamic(() => import('../Icon'))

const Card = ({ image, title, size, border, background, placeholder, className, icon, fillIcon, href, onClick }) => {
    let styleBorder = ""
    let styleBackground = ""
    let stylePlaceholder = ""
    let styleFillIcon = "size-6 "

    switch (border) {
        default: styleBorder = "border border-grey-100"
    }

    switch (background) {
        case "grey": styleBackground = "bg-grey-100"
            break
        default: null
    }

    switch (placeholder) {
        case "green": stylePlaceholder = "bg-green-600"
            break
        default: stylePlaceholder = "bg-grey-100"
    }

    switch (fillIcon) {
        default: styleFillIcon += "fill-white"
    }

    let style = `flex flex-col items-center gap-2 p-3 rounded-xl ${styleBackground} ${styleBorder} ${className ?? ""}`

    const Content = () => <>
        <div className={`relative size-12 overflow-hidden rounded-full flex justify-center items-center ${stylePlaceholder}`}>
            {image && <Image src={image.url} alt={title} width={0} height={0} className="inset-0 object-cover" />}
            {icon && <Icon fill="auto" name={icon} className={styleFillIcon} />}
        </div>
        <Heading level="4" className="text-center">{title}</Heading>
    </>

    if (typeof onClick == "function") return <button onClick={onClick} className={style}><Content /></button>
    else if (href) return <Link href={href} className={style}><Content /></Link>
    else return <div className={style}><Content /></div>
}

export default Card