import Link from "next/link"

const Button = ({ tag, children, href, color, className, ...props }) => {
    const Tag = tag ?? "button"

    let colorStyle = ""

    switch (color) {
        case 'grey': colorStyle = "bg-grey-50 text-grey-900"
            break
        case 'red': colorStyle = "bg-red-600 text-white"
            break
        case 'green': default: colorStyle = "bg-green-600 text-white"
            break
    }

    let style = `rounded-xl py-3 px-6 font-medium text-[16px] font-semibold tracking-wide cursor-pointer outline-none text-center ${colorStyle} ${className ?? ""}`

    return <>
        {href ? <Link {...props} href={href} className={style}> {children}
        </Link> : <Tag {...props} className={style}> {children} </Tag>}
    </>
}

export default Button