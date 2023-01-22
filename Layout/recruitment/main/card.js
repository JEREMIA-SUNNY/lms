import Image from "next/image";
import Link from "next/link";

const JobCard = ({ item }) => {
    const { id } = item

    return (
        <Link className="h-full rounded-lg shadow-xl bg-white  w-full transition ease-in-out delay-0 hover:-translate-2 hover:shadow-lg hover:scale-110 duration-300 " href={`/app/recruitment/detail/${id}`}>
            <div className="relative flex justify-between">
                <div className="flex justify-center items-center ml-4 my-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-blue-500">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    <p className="ml-1">{item?.Location}</p>
                </div>
                <button className={`w- h-8 ${item['status'] ? 'bg-[#409a00] text-white' : 'bg-gray-200 text-gray-500'} text-sm mx-2 px-2 py-1 rounded-b-lg`}>
                    {item['status'] ? 'Open' : 'Closed'}
                </button>
            </div>
            <div className="w-full px-4 pb-4">
                <div className="mr-2 mb-2 flex justify-start items-center py-1">
                    <div className="relative w-10 h-10 mr-2 bg-gray-100 rounded-lg flex justify-center items-center">
                        <Image
                            title={item?.workMode}
                            width={20}
                            height={20}
                            src={`/icons/${item?.workMode}-job.png`}
                            alt="remote icon image"
                        />
                    </div>
                    <div>
                        <p className="text-lg text-gray-900 font-medium title-font truncate">{item['Job title']}</p>
                        <p className="capitalize text-gray-500 text-xs">Department: {item['Department']}</p>
                    </div>
                </div>
                <div className="grid grid-cols-2 text-sm text-gray-500 capitalize pb-2">
                    <div className="mr-2 justify-start items-center flex">
                        <p><span className="text-gray-700">Work Mode:</span> {item?.workMode}</p>
                    </div>
                    <div className="mr-2 justify-start items-center flex">
                        <p><span className="text-gray-700">Business Unit:</span> {item['Business Unit']}</p>
                    </div>
                    <div className="mr-2 justify-start items-center flex">
                        <p> <span className="text-gray-700">Level:</span> {item['Level']}</p>
                    </div>
                    <div className="mr-2 justify-start items-center flex">
                        <p><span className="text-gray-700">Hire Type:</span> {item['Hire Type']}</p>
                    </div>
                    <div className="mr-2 justify-start items-center flex text-sm">
                        <p><span className="text-gray-700">Min Experience: </span> {item?.Experience}</p>
                    </div>
                    <div className="mr-2 flex justify-start items-center text-sm">
                        <p><span className="text-gray-700">Job Code: </span> {item['Job code']}</p>
                    </div>
                    <div className="mr-2 flex justify-start items-center text-sm">
                        <p><span className="text-gray-700">Requestor: </span> Naresh Gautam</p>
                    </div>
                    <div className="mr-2 flex justify-start items-center text-sm">
                        <p><span className="text-gray-700">Created on:</span> 30/11/2001</p>
                    </div>
                </div>
                <div className="my-2 flex gap-2 justify-start">
                    <p className="text-sm">
                        Skills:
                    </p>
                    {
                        item?.Skills.split(',').map((item, i) => {
                            return (
                                <div key={i} className='bg-green-200 rounded-md text-xs px-2 py-1 text-green-600 border border-green-600'>
                                    {item}
                                </div>
                            )
                        })
                    }

                </div>
                <div className="my-2 gap-2 flex">
                    <p className="text-sm">
                        Technology:
                    </p>
                    {
                        item?.Technology.split(',').map((item, i) => {
                            return (
                                <div key={i} className='bg-green-200 rounded-md text-xs px-2 py-1 text-green-600 border border-green-600'>
                                    {item}
                                </div>
                            )
                        })
                    }
                </div>
                <div className="flex justify-between items-center  border-dashed border-t-2 border-gray-200">
                    <p className="text-sm">
                        Assigned to:
                    </p>
                    <div className="flex justify-between items-center gap-2 mt-2">
                        <div className="bg-gray-200 rounded p-1 text-xs"><span>Applicants: (12) </span></div>
                        <div className="bg-gray-200 rounded p-1 text-xs"><span>Interviews: (2) </span></div>
                        <div className="bg-gray-200 rounded p-1 text-xs flex justify-between items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                            </svg>

                            <span>Offers: (1) </span></div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default JobCard;