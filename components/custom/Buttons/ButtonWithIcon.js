

const ButtonWithIcon = ({ children }) => {
    return (
        <button type="button" className="text-white focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2">
            {children}
        </button>
    )
}

export default ButtonWithIcon