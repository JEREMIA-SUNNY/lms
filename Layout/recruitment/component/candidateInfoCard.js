import IconButton from "components/custom/Buttons/IconButton";

const CandidateInfoCard = ({ item }) => {
    return (
        <div className="shadow-lg rounded-lg bg-white p-3">
            <div className="flex justify-start items-center">
                <div className="inline-flex overflow-hidden relative justify-center items-center border-2 border-gray-100 w-10 h-10 bg-gray-100 rounded-full">
                    <span className="font-medium text-gray-600">{item.name[0]}</span>
                </div>
                <div className="ml-2">
                    <p className=" text-xl text-gray-900 font-medium title-font truncate">{item?.name}</p>
                    <p className="capitalize text-gray-500 text-xs">Designation: {item?.designation}</p>
                </div>
            </div>
            <div className="mt-4 grid gap grid-cols-2">
                <IconButton className='bg-gray-100 rounded text-sm p-2 h-8 text-red-400 '>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    Reject
                </IconButton>
                <IconButton className='bg-green-600 rounded text-sm p-2 h-8 text-white '>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    Accept
                </IconButton>
            </div>
        </div>
    )
}

export default CandidateInfoCard;