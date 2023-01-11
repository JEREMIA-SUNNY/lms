

const PrimaryButton = ({ children, onClick, className }) => {
    return (
        <button onClick={onClick} type="button" className={`text-white bg-green-600 hover:bg-[#419a00] focus:ring-0 focus:ring-green-300 font-medium text-sm px-5 py-2.5 mt-2 mb-2 dark:bg-green-600 dark:hover:bg-[#419a00] focus:outline-none dark:focus:ring-[#419a00] ${className}`}>
            {children}
        </button>
    )
}

export default PrimaryButton