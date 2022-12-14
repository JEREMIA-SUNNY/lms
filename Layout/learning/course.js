import Link from "next/link";

const Course = () => {
    return (
        <Link className="xl:w-1/4 md:w-1/2 p-4" href={`/course/detail/1`}>
            <div className="shadow-lg bg-white p-6 rounded">
                <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/720x400" alt="content" />
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