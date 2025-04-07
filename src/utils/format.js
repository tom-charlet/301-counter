
export const formatDefault = (value, defaultValue) => {
    return (value === null || value === undefined) ? (defaultValue ?? null) : value
}

export const formatUpperFirst = (value) => {
    return `${value?.toString()?.slice(0, 1)?.toUpperCase()}${value?.toString()?.slice(1)}`
}