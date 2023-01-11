

const IconButton = ({ children, onClick, className }) => {
    return (
        <button onClick={onClick} type="button" className={`mx-1 shadow-lg focus:ring-0 focus:outline-none font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center ${className}` }>
            {children}
        </button>
    )
}

export default IconButton