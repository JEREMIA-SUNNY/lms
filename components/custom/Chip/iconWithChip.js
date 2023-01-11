

const IconWithChip = ({ children, className }) => {
    return (
        <div className={`flex justify-start items-center ${className}`}>
            {children}
        </div>
    )
}

export default IconWithChip;