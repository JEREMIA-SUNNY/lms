

const DetailHeaderSection = ({ des, item, cols, gap = "4" }) => {
    return (
        <>
            <div className="rounded-lg shadow bg-[#F5F5F5] p-4">
                <div className={`grid grid-cols-${cols} gap-${gap}`}>
                    {Object.keys(item).map((el, i) => {
                        return (
                            <div key={i} className='flex'>
                                <div className="w-1/2 capitalize">
                                    <span className="font-medium">{el}</span>
                                </div>
                                <div>
                                    <span className="text-textSecondary">: {item[el]}</span>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div>
                    <span className="font-semibold">Description </span>  <span className="text-textSecondary">: {des}</span>
                </div>
            </div>
        </>
    )
}

export default DetailHeaderSection;