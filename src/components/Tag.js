'use client'

import { useState } from "react";
import dynamic from "next/dynamic";

const ButtonIcon = dynamic(() => import('./ButtonIcon'))

const Tag = ({ children, onClick, active }) => {
    return <li onClick={onClick} className={`flex items-center text-[14px] font-medium gap-2 rounded-full p-1 pl-4 shrink-0 ${active ? "bg-green-600 text-white" : "bg-grey-100"}`}>
        {children}
        <ButtonIcon tag="span" icon="add" size="small" className={`duration-300 ease-out ${active ? "!rotate-45" : ""}`} />
    </li>
}

export default Tag