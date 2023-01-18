
const list = [
    { name: 'Avg Rating', title: 'Avg Rating' },
    { name: 'Price(H-L)', title: 'Price (High-Low)' },
    { name: 'Price(L-H)', title: 'Price (Low-High)' },
    { name: 'Popularity', title: 'Popularity' },
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