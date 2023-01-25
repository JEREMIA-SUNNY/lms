
import IconButton from "components/custom/Buttons/IconButton";

const TableRow = ({ row }) => {

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
                    <div className="flex items-center">
                        <IconButton className='bg-white text-[#419a00]'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-green-500">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                        </IconButton>
                        <IconButton className='bg-white text-[#419a00]'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-red-400">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </IconButton>
                    </div>
                </td>
            </tr>
        </>
    )
}
export default TableRow