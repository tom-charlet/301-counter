import React from 'react'

const Icon = ({ name, fill, ...props }) => {

    switch (name) {
        case "add":
            return <svg {...props} width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.5491 13.14H5.5491V11.14H11.5491V5.14001H13.5491V11.14H19.5491V13.14H13.5491V19.14H11.5491V13.14Z" fill={fill ?? "#1C1B1F"} />
            </svg>
        case "chevron-left":
            return <svg {...props} width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.8217 22.9897L6.82166 12.9897L16.8217 2.98975L18.5967 4.76475L10.3717 12.9897L18.5967 21.2147L16.8217 22.9897Z" fill={fill ?? "#1C1B1F"} />
            </svg>

    }
}

export default Icon