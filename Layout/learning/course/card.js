import Image from "next/image";
import Link from "next/link";

const Course = ({ id }) => {
    return (
        <Link className="w-full" href={`/app/learning/courses/detail/${id}`}>
            <div className="shadow bg-white p-4 rounded-lg">
                <Image
                    className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 h-40 rounded-md w-full object-cover object-center"
                    height={200}
                    width={200}
                    quality={100}
                    src='/demoimage/Courses.png'
                    alt="Sample image"
                />
                <div className="relative -mt-11">
                    <button className="flex items-center mx-2 shadow-md font-semibold text-gray-600 px-4 py-2 bg-white text-xs rounded-full">
                        10 Modules
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-[#409a00] ml-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                        </svg>

                    </button>
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font my-4">Lorem ipsum</h2>
                <p className="leading-relaxed text-base">
                    In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without
                </p>
            </div>
        </Link>
    )
}

export default Course;