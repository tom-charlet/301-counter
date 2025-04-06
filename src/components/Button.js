import Link from "next/link"

const Button = ({ tag, children, href, secondary, className, ...props }) => {
    const Tag = tag ?? "button"
    const style = `
        rounded-xl py-3 px-6 font-medium text-[16px] font-semibold tracking-wide cursor-pointer outline-none
        ${secondary ? "bg-grey-50 text-grey-900" : "bg-green-600 text-white"}
        ${className ?? ""}
    `

    return <>
        {href ? <Link {...props} href={href} className={style}>
            {children}
        </Link> : <Tag {...props} className={style}>
            {children}
        </Tag>}
    </>
}

export default Button