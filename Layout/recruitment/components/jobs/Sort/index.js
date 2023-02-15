
const list = [
    { name: 'applicants', title: 'Applicants' },
    { name: 'Recent', title: 'Most Recent' },
]

const Sortby = () => {
    return (
        <div className="w-28 ml-2">
            <select name='sortby' className="shadow-lg outline-gray-200 bg-gray-50 border border-gray-300 text-textSecondary text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5">
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