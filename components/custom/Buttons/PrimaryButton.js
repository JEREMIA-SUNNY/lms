

const PrimaryButton = ({ children, onClick, className }) => {
    return (
        <button onClick={onClick} type="button" className={`text-white bg-primary hover:bg-primary focus:ring-0 focus:ring-primary font-medium text-sm px-5 py-2.5 mt-2 mb-2 dark:bg-primary dark:hover:bg-primary focus:outline-none dark:focus:ring-primary ${className}`}>
            {children}
        </button>
    )
}

export default PrimaryButton