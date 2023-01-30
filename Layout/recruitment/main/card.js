import ListChipWithMore from "components/ListChipWithMore";
import Link from "next/link";

const getWorkModeIcon = (workmode) => {
    switch (workmode) {
        case 'onsite':
            return <path d="M4 42V6h19.5v8.25H44V42Zm3-3h5.25v-5.25H7Zm0-8.25h5.25V25.5H7Zm0-8.25h5.25v-5.25H7Zm0-8.25h5.25V9H7ZM15.25 39h5.25v-5.25h-5.25Zm0-8.25h5.25V25.5h-5.25Zm0-8.25h5.25v-5.25h-5.25Zm0-8.25h5.25V9h-5.25ZM23.5 39H41V17.25H23.5v5.25h4v3h-4v5.25h4v3h-4Zm9.25-13.5v-3h3v3Zm0 8.25v-3h3v3Z" />
            break;
        case 'hybrid':
            return <path d="M34.85 16.85h3v-3h-3Zm0 8.55h3v-3h-3Zm0 8.5h3v-3h-3Zm-2.8 8.1v-3H43V9H23.25v5.6l-3-2.1V6H46v36ZM2 42V22.5l13.55-9.7 13.5 9.7V42H18.2V31.95h-5.3V42Zm3-3h4.9V28.95h11.3V39h4.85V24.05l-10.5-7.55L5 24.05Zm27.05-18.25ZM21.2 39V28.95H9.9V39 28.95h11.3Z" />
            break;
        case 'remote':
            return <path xmlns="http://www.w3.org/2000/svg" d="M11 39h7.5V26.5h11V39H37V19.5L24 9.75 11 19.5Zm-3 3V18L24 6l16 12v24H26.5V29.5h-5V42Zm16-17.65Z" />
            break;

        default:
            break;
    }
}

const JobCard = ({ item }) => {
    const { id } = item

    return (
        <Link className="h-full rounded-lg shadow-xl bg-white  w-full transition ease-in-out delay-0 hover:-translate-2 hover:shadow-lg hover:scale-110 duration-300 " href={`/app/recruitment/detail/${id}`}>
            <div className="relative flex justify-between">
                <div className="flex justify-center items-center ml-4 my-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-red-500">
                        <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                    </svg>
                    <p className="ml-1 text-xs text-gray-500">{item?.Location}</p>
                </div>
                <button className={`h-8 ${item['status'] ? 'bg-[#409a00] text-white' : 'bg-gray-200 text-gray-500'} text-sm mx-2 px-2 py-1 rounded-b-lg`}>
                    {item['status'] ? 'Open' : 'Closed'}
                </button>
            </div>
            <div className="w-full px-4 pb-4">
                <div className="mr-2 mb-2 flex justify-start items-center py-1">
                    <div className="w-12 h-12 mr-2 bg-gray-100 rounded-lg flex justify-center items-center">
                        <svg className="h-10 w-10" xmlns="http://www.w3.org/2000/svg" viewBox="-16 -16 80 80" fill="#409a00">
                            {getWorkModeIcon(item?.workMode)}
                        </svg>
                    </div>
                    <div>
                        <p className=" text-xl text-gray-900 font-medium title-font truncate">{item['Job title']}</p>
                        <p className="capitalize text-gray-500 text-xs">workMode: {item?.workMode}</p>
                    </div>
                </div>
                <div className="grid grid-cols-2 text-sm text-gray-500 capitalize pb-2">
                    <div className="mr-2">
                        <p className="truncate"><span className="text-gray-700">Department:</span> {item?.Department}</p>
                    </div>
                    <div className="mr-2">
                        <p className="truncate"><span className="text-gray-700">Business Unit:</span> {item['Business Unit']}</p>
                    </div>
                    <div className="mr-2">
                        <p> <span className="text-gray-700">Level:</span> {item?.Level}</p>
                    </div>
                    <div className="mr-2">
                        <p><span className="text-gray-700">Hire Type:</span> {item['Hire Type']}</p>
                    </div>
                    <div className="mr-2 text-sm">
                        <p><span className="text-gray-700">Min Experience: </span> {item?.Experience}</p>
                    </div>
                    <div className="mr-2 text-sm">
                        <p><span className="text-gray-700">Job Code: </span> {item['Job code']}</p>
                    </div>
                    <div className="mr-2 text-sm">
                        <p><span className="text-gray-700">Requestor: </span> Naresh Gautam</p>
                    </div>
                    <div className="mr-2 text-sm">
                        <p><span className="text-gray-700">Created on:</span> 30/11/2001</p>
                    </div>
                </div>
                <div className="flex justify-start items-center">
                    <p className="mt-2 text-sm text-gray-500">
                        Skills
                    </p>
                    <ListChipWithMore list={item?.Skills.split(',')} row={1} />
                </div>
                <div className="flex justify-start items-start">
                    <p className="mt-2 text-sm text-gray-500">
                        Technology
                    </p>
                    <ListChipWithMore list={item?.Technology.split(',')} row={1} />
                </div>

                <div className="flex justify-between items-center border-dashed border-t-2 border-gray-200">
                    <div className="text-sm flex justify-between items-center text-gray-700">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-green-600 mr-1">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        Naresh Kumar Gautam
                    </div>
                    <div className="flex justify-between items-center gap-2 mt-2">
                        <div className="bg-gray-100 rounded p-1 text-xs flex justify-between items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-green-600">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                            </svg>
                            <span className="ml-1"> (12) </span>
                        </div>
                        <div className="bg-gray-100 rounded p-1 text-xs flex justify-between items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-green-600">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                            </svg>
                            <span className="ml-1"> (2) </span>
                        </div>

                        <div className="bg-gray-100 rounded p-1 text-xs flex justify-between items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-green-600">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                            </svg>
                            <span className="ml-1"> (1) </span></div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default JobCard;