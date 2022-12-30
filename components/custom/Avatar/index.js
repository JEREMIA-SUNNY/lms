

const Avatar = ({ alt }) => {
    return (
        <>
            <div className="mt-2 flex items-center space-x-2">
                <div className="inline-flex overflow-hidden relative justify-center items-center border-2 border-gray-100 w-10 h-10 bg-gray-100 rounded-full dark:bg-gray-600">
                    <span className="font-medium text-gray-600">{alt[0]}</span>
                </div>
                <div className="text-gray-500">
                    <div>{alt}</div>
                </div>
            </div>
        </>
    )
}

export default Avatar;