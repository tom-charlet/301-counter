export const formatUpperFirst = (value) => {
    return `${value?.toString()?.slice(0, 1)?.toUpperCase()}${value?.toString()?.slice(1)}`
}