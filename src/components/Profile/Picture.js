import Link from 'next/link'
import Image from 'next/image'

const Picture = ({ url, alt, onClick, href, active, border, ...props }) => {

    const style = `size-18 shrink-0 rounded-full overflow-hidden relative cursor-pointer ${border ? `border-3 ${active ? "border-green-500" : "border-transparent"}` : ""}`
    const Content = () => <Image src={url} alt={alt} width={0} height={0} sizes="100vw" className='w-full h-full object-cover bg-grey-100' />

    if (typeof onClick == "function") return <button onClick={onClick} className={style} {...props}><Content /></button>
    else if (href) return <Link href={href ?? ""} className={style}><Content /></Link>
    else return <span className={style}><Content /></span>
}

export default Picture