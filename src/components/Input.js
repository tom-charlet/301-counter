'use client'

const Input = ({ className, ...props }) => {
    return <input {...props} className={`text-[16px] rounded-full w-full bg-white border-3 border-grey-200 placeholder:text-grey-300 py-3 px-6 outline-none focus:border-green-500 ${className ?? ""}`} />
}

export default Input