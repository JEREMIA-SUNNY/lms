import Link from "next/link";

const PlanCard = ({ item }) => {
    const { id, name, asignedTo, completedUserCount, UserCount, description, course, training, duedate } = item

    return (
        <Link className="rounded-lg shadow-xl bg-white  w-full transition ease-in-out delay-0 hover:-translate-2 hover:shadow-lg hover:scale-110 duration-300 " href={`/app/learning/plan/detail/${id}`}>
            <div className="relative flex justify-end">
                <button className={`${item?.close ? 'bg-red-200 text-red-500' : 'bg-[#409a00] text-white'}   flex text-[10px] items-center mx-2 px-2 py-1 rounded-b-lg`}>
                    Due Date: {duedate}
                </button>
            </div>
            <div className="w-full px-4 pb-4">
                <h2 className="text-lg text-gray-900 font-medium title-font truncate">{name}</h2>

                <div className="mr-2 flex justify-start items-center py-1 flex text-gray-500 text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-[#409a00]">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                    </svg>
                    <p className="ml-1">Courses : {course}</p>
                </div>
                <div className="mr-2 flex justify-start items-center py-1 flex text-gray-500 text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-[#409a00]">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                    </svg>
                    <p className="ml-1">Trainings : {training}</p>
                </div>
                <div className="mr-2 flex justify-start items-center py-1 flex text-gray-500 text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-[#409a00]">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                    </svg>
                    <p className="ml-1">Asigned to : {asignedTo}</p>
                </div>
                <div className="mr-2 flex justify-start items-center py-1 flex text-gray-500 text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-[#409a00]">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                    <p className="ml-1">Completed Users : {completedUserCount}</p>
                </div>

                <div className="my-3 grid grid-cols-3 gap-2 divide-x">
                    <div className="flex justify-center items-center rounded-lg bg-gray-100 px-2 py-1 flex text-gray-500 font-normal text-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-[#409a00]">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
                        </svg>
                        <p className="ml-1">{UserCount}</p>
                    </div>

                    <div className="mr-2 flex justify-center items-center rounded-lg bg-gray-100 px-2 py-1 flex text-gray-500 font-normal text-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-[#409a00]">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                        </svg>
                        <p className="ml-1">{completedUserCount} %</p>
                    </div>
                </div>
                <div className="flex justify-start items-center">
                    <div className="my-2 h-2 rounded-full w-full bg-gray-200">
                        <div style={{ width: `${completedUserCount + 0}%` }} className='h-2 rounded-full bg-[#409a00]'>
                        </div>
                    </div>
                    <p className="ml-2 text-xs text-gray-400">{completedUserCount}%</p>
                </div>
                <p className="text-gray-500 text-sm leading-5">
                    {description}
                </p>
            </div>
        </Link>
    )
}

export default PlanCard;