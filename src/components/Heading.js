
const Heading = ({ level, tag, children, className }) => {
    const Tag = tag ?? `h${level}`
    let style = "leading-[120%] "

    switch (level) {
        case '1': style += "text-[32px] font-semibold"
            break
        case '2': style += "text-[20px] font-semibold"
            break
        case '3': style += "text-[16px] font-semibold"
            break
        case '4': style += "text-[10px]"
            break
        default: break
    }

    return <Tag className={`${style} ${className ?? ""}`} >{children}</Tag>
}

export default Heading