import Link from 'next/link'

const Picture = ({ url, alt, onClick, href, active, border, ...props }) => {

    const style = `size-16 shrink-0 rounded-full overflow-hidden relative cursor-pointer ${border ? `border-3 ${active ? "border-green-500" : "border-transparent"}` : ""}`
    const Content = () => <img src={url} alt={alt} className="inset-0 w-full h-full object-cover bg-grey-100" />

    if (typeof onClick == "function") return <button onClick={onClick} className={style} {...props}><Content /></button>
    else if (href) return <Link href={href ?? ""} className={style}><Content /></Link>
    else return <span className={style}><Content /></span>
}

export default Picture