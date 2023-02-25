


const FilterButtonTab = ({ tabs, setSelectedtab, selectedTab, className = 'py-2.5 border px-2' }) => {

    return (
        <div className="rounded-md flex justify-start">
            {
                tabs.map((item, i) => {
                    return (
                        <button key={item} onClick={() => { setSelectedtab(item) }}
                            className={`${i === tabs?.length - 1 ? 'rounded-r-md' : ''} ${i === 0 ? 'rounded-l-md' : ''} ${selectedTab === item ? 'bg-primary text-white' : 'text-gray-600 bg-white'} text-sm w-full ${className}`}>
                            {item}
                        </button>
                    )
                })
            }
        </div>
    )
}

export default FilterButtonTab;