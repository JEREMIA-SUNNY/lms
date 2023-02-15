import TableRow from "./row"
import TableHead from './head'

const Table = ({ data, column, tablename }) => {
    return (
        <>
            <div className="overflow-x-auto relative">
                <table className="w-full text-sm text-left text-gray-500">
                    <thead className="text-xs text-gratextSecondary uppercase bg-gray-50">
                        <TableHead list={column} />
                    </thead>
                    <tbody>
                        {
                            data?.map((item, i) => {
                                return (
                                    <TableRow key={i} tablename={tablename} row={item} />
                                )
                            })
                        }

                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Table