import Image from "next/image";
import Link from "next/link";

const Course = ({ id }) => {
    return (
        <Link className="w-full" href={`/app/learning/course/detail/${id}`}>
            <div className="shadow bg-white p-6 rounded-lg">
                <Image
                    className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 h-40 rounded-md w-full object-cover object-center mb-6"
                    height={200}
                    width={200}
                    quality={100}
                    src='/demoimage/Courses.png'
                    alt="Sample image"
                />
                <h3 className="tracking-widest text-[#419a00] text-xs font-medium title-font">Category</h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Lorem ipsum</h2>
                <p className="leading-relaxed text-base">
                    In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without
                </p>
            </div>
        </Link>
    )
}

export default Course;