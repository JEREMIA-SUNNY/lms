

const PrimaryButton = ({ children, onClick }) => {
    return (
        <button onClick={onClick} type="button" className="text-white bg-green-600 hover:bg-green-700 focus:ring-0 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mt-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800">
            {children}
        </button>
    )
}

export default PrimaryButton