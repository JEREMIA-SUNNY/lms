
const list = [
    { name: 'Enter Level', title: 'Enter Level' },
    { name: 'Mid Level', title: 'Mid Level' },
    { name: 'Mid Level', title: 'Mid Level' },
    { name: 'Principal', title: 'Principal' },
    { name: 'Remote', title: 'Remote' },
    { name: 'Onsite', title: 'Onsite' },
    { name: 'Hybrid', title: 'Hybrid' },
    { name: 'Recent', title: 'Most Recent' },
]

const Sortby = () => {
    return (
        <div className="w-28 ml-2">
            <select name='sortby' className="shadow-lg outline-gray-200 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5">
                <option>Sort by </option>
                {list?.map((item, i) => {
                    return (
                        <option key={i} value={item?.value}>{item?.title}</option>
                    )
                })}
            </select>
        </div>
    )
}

export default Sortby;