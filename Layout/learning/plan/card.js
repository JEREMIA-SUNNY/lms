import GroupAvatar from "components/custom/GroupAvatar";
import Link from "next/link";

const PlanCard = ({ item }) => {
    const { id, name, asignedTo, completedUserCount, UserCount, description, course, training, duedate } = item

    return (
        <Link className="rounded-lg shadow-xl bg-white  w-full transition ease-in-out delay-0 hover:-translate-2 hover:shadow-lg hover:scale-110 duration-300 " href={`/app/learning/plan/detail/${id}`}>
            <div className="relative flex justify-end">
                <button className={`bg-[#409a00] text-white flex text-[10px] items-center mx-2 px-2 py-1 rounded-b-lg`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-1">
                        <path strokeLinecap="round" d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25" />
                    </svg>
                    {asignedTo}
                </button>
            </div>
            <div className="w-full px-4 pb-4">
                <h2 className="text-lg text-gray-900 font-medium title-font truncate">{name}</h2>

                <div className="grid grid-cols-2 gap-2 text-gray-500 text-sm">
                    <div className="mr-2 flex justify-start items-center py-1 flex">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                        </svg>
                        <p className="ml-1">Courses : {course}</p>
                    </div>
                    <div className="mr-2 flex justify-start items-center py-1 flex">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                        </svg>
                        <p className="ml-1">Trainings : {training}</p>
                    </div>

                </div>
                <div className="grid grid-cols-2 gap-2">
                    <div className={`${item?.close ? 'text-red-500' : 'text-gray-500'} text-sm mr-2 flex justify-start items-center py-1 flex`}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                        </svg>
                        <p className="ml-1">Due : {duedate}</p>
                    </div>

                    <div className="mr-2 flex justify-start items-center py-1 flex text-gray-500 text-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                        </svg>
                        <p className="ml-1">Completed : {completedUserCount}</p>
                    </div>
                </div>

                <div className="flex justify-start items-center">
                    <div className="my-2 h-2 rounded-full w-full bg-gray-200">
                        <div style={{ width: `${completedUserCount + 0}%` }} className='h-2 rounded-full bg-[#409a00]'>
                        </div>
                    </div>
                    <p className="ml-2 text-xs text-gray-400">{completedUserCount}%</p>
                </div>
                <div>
                    <GroupAvatar className='w-7 h-7' rows={5} total={UserCount} />
                </div>
            </div>
        </Link>
    )
}

export default PlanCard;