

const ButtonWithIcon = ({ children }) => {
    return (
        <button type="button" className="text-white bg-[#419a00] hover:bg-[#419a00] focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-green-600 dark:hover:bg-[#419a00] dark:focus:ring-[#419a00]">
            {children}
        </button>
    )
}

export default ButtonWithIcon