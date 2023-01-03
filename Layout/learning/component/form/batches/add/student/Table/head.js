
const list = ['S No.', 'Student Name', 'Student Id', 'Phone Number', 'Gender', 'Action']
const TableHead = () => {
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