import Link from "next/link"
import dynamic from "next/dynamic";

const Icon = dynamic(() => import('./Icon'))

const ButtonIcon = ({ icon, tag, children, href, className, ...props }) => {
    const Tag = tag ?? "button"

    let styleButton = `size-10 rounded-full bg-white/20 flex justify-center items-center cursor-pointer outline-none ${className ?? ""}`
    let styleIcon = "size-4 fill-white "

    return <>
        {href ? <Link {...props} href={href} className={styleButton}>
            {icon && <Icon fill="auto" name={icon} className={styleIcon} />}
        </Link> : <Tag {...props} className={styleButton}>
            {icon && <Icon fill="auto" name={icon} className={styleIcon} />}
        </Tag>}
    </>
}

export default ButtonIcon