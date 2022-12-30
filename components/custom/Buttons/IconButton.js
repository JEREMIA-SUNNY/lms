

const IconButton = ({ children, onClick }) => {
    return (
        <button onClick={onClick} type="button" className="text-[#419a00] hover:bg-white focus:ring-0 focus:outline-none font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center">
            {children}
        </button>
    )
}

export default IconButton