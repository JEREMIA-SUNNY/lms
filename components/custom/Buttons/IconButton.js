

const IconButton = ({ children, onClick }) => {
    return (
        <button onClick={onClick} type="button" className="mx-1 text-[#419a00] shadow-lg bg-white focus:ring-0 focus:outline-none font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center">
            {children}
        </button>
    )
}

export default IconButton