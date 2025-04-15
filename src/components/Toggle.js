'use client'

import { useState, useEffect, useRef } from "react"

const Toggle = ({ options, name, onChange, defaultValue, ...props }) => {
    const [state, setState] = useState("")
    const active = useRef()

    useEffect(() => {
        if (defaultValue) setState(defaultValue)
    }, [defaultValue])

    const handleClick = (e, value) => {
        e.preventDefault()
        setState(value)
        if (typeof onChange == "function") onChange(value)
    }

    useEffect(() => {
        if (state && state != "" && active.current) {
            let el = document.getElementById(`${name}-${state}`)?.offsetLeft ?? null
            if (el) active.current.style.left = el + "px"
        }
    }, [state])

    return <div className="flex items-center rounded-full bg-grey-100 p-1 gap-2.5 relative isolate h-12">
        {options?.length > 0 && options.map((item, index) => <button id={`${name}-${item?.value}`} key={index} onClick={(e) => handleClick(e, item?.value)} className={`w-full h-full font-medium rounded-full duration-300 ease-out ${item.value == state ? "text-white" : "text-grey-900"}`}>{item?.title}</button>)}
        {(state && state != "") && <span ref={active} className="absolute bg-green-600 rounded-full -z-10 h-[calc(100%-8px)] w-[calc(50%-8px)] duration-300 ease-out" />}
    </div>
}

export default Toggle