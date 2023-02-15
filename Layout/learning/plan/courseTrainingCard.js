import IconButton from "components/custom/Buttons/IconButton";
import Image from "next/image";
import Link from "next/link";

const CourseTrainingCard = ({ item, length, index }) => {
    const { id, auther, price, thumnnail, complete, description, modules, language, level, name } = item
    return (
        <div className="relative h-full w-full flex justify-start items-center">
            <Link className="p-4 rounded-lg shadow-xl bg-white h-full  w-full transition ease-in-out delay-0 hover:-translate-2 hover:shadow-lg hover:scale-110 duration-300 " href={`/app/learning/courses/detail/${id}`}>
                <div className="w-full">
                    <div className="relative -mb-7">
                        <button className="bg-primary w-20 font-semibold text-white flex text-sm items-center mx-2 shadow-lg px-2 py-1 rounded-b-lg">
                            {price === '0' ? 'Free' : `$ ${price}`}
                        </button>
                    </div>

                    <Image
                        className="h-40 rounded-lg w-full object-cover object-center"
                        height={200}
                        width={200}
                        quality={100}
                        loading="eager" priority={true}
                        src={thumnnail}
                        alt={name}
                    />
                    <div className="relative -mt-9">
                        <button className="bg-white flex text-sm items-center mx-2 shadow-lg  px-2 py-1 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 mr-1 text-green-600">
                                <path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75zM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 01-1.875-1.875V8.625zM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 013 19.875v-6.75z" />
                            </svg>
                            <span>{level}</span>
                            <span></span>
                        </button>
                    </div>
                    <h2 className="text-lg text-textSecondary font-medium title-font mt-4 truncate">{name}</h2>
                    <h3 className="text-md text-gray-400 title-font truncate">{auther}</h3>

                    <div className="flex justify-start items-center">
                        <div className="my-2 h-2 rounded-full w-full bg-gray-200">
                            <div style={{ width: `${complete + 0}%` }} className='h-2 rounded-full bg-primary'>
                            </div>
                        </div>
                        <p className="ml-2 text-xs text-gray-400">{complete}%</p>
                    </div>

                    <div className="my-3 flex justify-between divide-x">
                        <div className="flex justify-center items-center rounded-lg bg-gray-100 px-1 py-1 text-gray-500 font-normal text-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-[#409a00]">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802" />
                            </svg>
                            <p className="ml-1">{language}</p>
                        </div>
                        <div className="flex justify-center items-center rounded-lg bg-gray-100 px-2 py-1 text-gray-500 font-normal text-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-[#409a00]">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                            </svg>

                            <p className="ml-1">40</p>
                        </div>
                        <div className="flex justify-center items-center rounded-lg bg-gray-100 px-2 py-1 text-gray-500 font-normal text-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-[#409a00]">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                            </svg>
                            <p className="ml-1">4.5</p>
                        </div>
                        <div className="mr-2 flex justify-center items-center rounded-lg bg-gray-100 px-2 py-1 text-gray-500 font-normal text-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-[#409a00]">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                            </svg>
                            <p className="ml-1">{modules}</p>
                        </div>
                    </div>
                    <p className="text-gray-500 text-sm leading-5">
                        {description}
                    </p>
                </div>
            </Link>
            {index < length - 1 ? <div>
                <IconButton className='bg-white shadow-lg text-[#419a00]'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                    </svg>
                </IconButton>
            </div> : ''}
        </div>
    )
}

export default CourseTrainingCard;