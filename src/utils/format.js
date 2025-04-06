
export const formatDefault = (value, defaultValue) => {
    return (value === null || value === undefined) ? (defaultValue ?? null) : value
}