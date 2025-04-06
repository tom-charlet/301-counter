'use client'

const Input = ({ className, ...props }) => {
    return <input {...props} className={`text-[16px] rounded-full w-full bg-white border-2 border-grey-300 placeholder:text-grey-300 py-3 px-6 focus:outline-green-600 ${className ?? ""}`} />
}

export default Input