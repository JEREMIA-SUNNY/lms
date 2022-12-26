

const SelectInput = ({ id, name, dropdowns, onChange }) => {

    return (
        <select onChange={onChange} id={id} name={name} className="outline-gray-200 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5">
            <option>Select </option>
            {dropdowns?.map((item, i) => {
                return (
                    <option key={i} value={item?.value}>{item?.title}</option>
                )
            })}
        </select>
    )


}

export default SelectInput