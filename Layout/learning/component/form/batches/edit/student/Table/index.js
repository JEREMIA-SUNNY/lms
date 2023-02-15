import TableRow from "./row"
import TableHead from './head'

const Table = ({ data }) => {
    return (
        <>
            <div className="overflow-x-auto relative">
                <table className="w-full text-sm text-left text-gray-500">
                    <thead className="text-textSecondary uppercase bg-gray-50">
                        <TableHead />
                    </thead>
                    <tbody>
                        {
                            data?.map((item, i) => {
                                return (
                                    <TableRow key={i} row={item} />
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