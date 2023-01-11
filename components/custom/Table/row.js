
import TableAction from "./Action";

const TableRow = ({ row, action, tablename }) => {

    return (
        <>
            <tr className="bg-white border-b">
                {
                    Object.values(row).map((item, i) => {
                        return (
                            <td key={i} className="py-1 px-6">
                                {item}
                            </td>
                        )
                    })
                }
                <td className="py-2 px-6">
                    <TableAction tablename={tablename} />
                </td>
            </tr>
        </>
    )
}
export default TableRow