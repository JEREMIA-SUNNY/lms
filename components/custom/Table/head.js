
const TableHead = ({list}) => {
    return (
        <tr>
            {list?.map((item, i) => {
                return (
                    <th key={i} scope="col" className="py-3 px-6">
                        {item}
                    </th>
                )
            })
            }
        </tr>
    )
}
export default TableHead