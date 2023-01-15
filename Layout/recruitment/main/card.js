import Link from "next/link";

const JobCard = ({ item }) => {
    const { id } = item

    return (
        <Link className="h-full rounded-lg shadow-xl bg-white  w-full transition ease-in-out delay-0 hover:-translate-2 hover:shadow-lg hover:scale-110 duration-300 " href={`/app/recruitment/detail/${id}`}>
            <div className="relative flex justify-end">
                <button className={`bg-[#409a00] text-white flex text-[10px] items-center mx-2 px-2 py-1 rounded-b-lg`}>
                    Skills: {item['Skills']}
                </button>
            </div>      
            <div className="w-full px-4 pb-4">
                <p className="text-lg text-gray-900 font-medium title-font truncate">{item['Job title']}</p>
                <p className="text-md text-gray-600 font-medium truncate">Requestor: Naresh Kumar Gautam</p>
                <div className="grid grid-cols-2 text-gray-500 text-sm">
                    <div className="mr-2 flex justify-start items-center flex">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                        </svg>
                        <p className="ml-1">{item?.Level}</p>
                    </div>
                    <div className={`${item?.close ? 'text-red-500' : 'text-gray-500'} text-sm mr-2 flex justify-start items-center py-1 flex`}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                        </svg>
                        <p className="ml-1">{item['Hire Type']}</p>
                    </div>

                    <div className="mr-2 flex justify-start items-center py-1 flex text-gray-500 text-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                        </svg>

                        <p className="ml-1">{item?.Experience}</p>
                    </div>
                    <div className="mr-2 flex justify-start items-center py-1 flex">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>

                        <p className="ml-1">{item?.Location}</p>
                    </div>
                    <div className="mr-2 flex justify-start items-center py-1 flex text-gray-500 text-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 013.75 9.375v-4.5zM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5zM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0113.5 9.375v-4.5z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 6.75h.75v.75h-.75v-.75zM6.75 16.5h.75v.75h-.75v-.75zM16.5 6.75h.75v.75h-.75v-.75zM13.5 13.5h.75v.75h-.75v-.75zM13.5 19.5h.75v.75h-.75v-.75zM19.5 13.5h.75v.75h-.75v-.75zM19.5 19.5h.75v.75h-.75v-.75zM16.5 16.5h.75v.75h-.75v-.75z" />                        </svg>
                        <p className="ml-1">JobCode: {item['Job code']}</p>
                    </div>

                </div>
                {/* <div className="mr-2 flex justify-start items-start py-1 flex text-gray-500 text-sm">
                    <p className="ml-1">{item['Technology']}</p>
                </div> */}
                <hr />
                <div className="mr-2 flex justify-between items-center py-1 flex text-gray-700 text-sm">
                    <div className="mr-2 flex justify-start items-center py-1 flex">
                        <p className={`${item?.status ? 'text-green-500' : 'text-red-400'} ml-1`}>{item?.status ? 'Open' : 'Closed'}</p>
                    </div>
                    <div className="mr-2 flex justify-start items-center py-1 flex">
                        <p className="ml-1">20/11/2021</p>
                    </div>

                </div>
            </div>
        </Link>
    )
}

export default JobCard;