
const data = [{
    "id": 1,
    "Session": "Gigazoom",
    "start": "3/30/2022",
    "end": "12/15/2022"
}, {
    "id": 2,
    "Session": "Twimm",
    "start": "5/16/2022",
    "end": "1/30/2022"
}, {
    "id": 3,
    "Session": "Linklinks",
    "start": "1/16/2022",
    "end": "5/6/2022"
}, {
    "id": 4,
    "Session": "Eayo",
    "start": "8/21/2022",
    "end": "11/19/2022"
}, {
    "id": 5,
    "Session": "Oyoba",
    "start": "11/6/2022",
    "end": "3/1/2022"
}, {
    "id": 6,
    "Session": "Riffpath",
    "start": "7/19/2022",
    "end": "10/7/2022"
}, {
    "id": 7,
    "Session": "Tagpad",
    "start": "8/11/2022",
    "end": "8/31/2022"
}, {
    "id": 8,
    "Session": "Shufflebeat",
    "start": "7/24/2022",
    "end": "5/28/2022"
}, {
    "id": 9,
    "Session": "Devcast",
    "start": "4/15/2022",
    "end": "10/14/2022"
}, {
    "id": 10,
    "Session": "Twiyo",
    "start": "12/30/2022",
    "end": "10/3/2022"
}]
const ListOfSession = () => {
    return (
        <>
            <div className="grid grid-cols-4 gap-4 mt-4 ">
                {data?.map((item) => {
                    return (
                        <div className=" rounded shadow bg-white px-2 py-1 border-l-2 border-[#419a00]" key={item.id}>
                            <h2 className="text-lg text-gray-900 font-medium title-font truncate">{item?.Session}</h2>
                            <div className="flex justidy-start items-center text-gray-500">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                                </svg>

                                <p className="text-sm">{item?.start}  to {item?.end}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default ListOfSession;