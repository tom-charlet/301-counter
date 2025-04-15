import Link from "next/link"
import dynamic from "next/dynamic";

const Icon = dynamic(() => import('./Icon'))

const ButtonIcon = ({ icon, tag, children, href, className, size, color, ...props }) => {
    const Tag = tag ?? "button"

    let styleButton = `rounded-full flex justify-center items-center cursor-pointer outline-none `
    let styleIcon = ""

    switch (color) {
        case 'clear':
            styleButton += "bg-white/20 "
            styleIcon += "fill-white "
            break
        case 'white': default:
            styleButton += "bg-white "
            styleIcon += "fill-grey-900 "
            break
    }

    switch (size) {
        case 'small':
            styleButton += "size-7 "
            styleIcon += "size-6 "
            break
        case 'medium': default:
            styleButton += "size-10 "
            styleIcon += "size-8 "
            break
    }

    return <>
        {href ? <Link {...props} href={href} className={`${styleButton} ${className ?? ""}`}>
            {icon && <Icon fill="auto" name={icon} className={styleIcon} />}
        </Link> : <Tag {...props} className={`${styleButton} ${className ?? ""}`}>
            {icon && <Icon fill="auto" name={icon} className={styleIcon} />}
        </Tag>}
    </>
}

export default ButtonIcon