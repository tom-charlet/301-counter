
const Container = ({ children }) => {
    return <section className="flex flex-col gap-2.5 p-4 overflow-auto">
        {children}
    </section>
}

export default Container