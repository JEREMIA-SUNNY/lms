import Image from "next/image";

const CourseTrainingCard = ({ item, removeSelected }) => {
    const { thumnnail, name, price } = item
    return (
        <>
            <div className="p-2 rounded-lg shadow-xl bg-white  w-full">
                <div className="relative">
                    <button onClick={() => removeSelected(item)} className="absolute top-0 right-0  m-1 w-8 h-8 flex justify-center items-center text-red-400 shadow-lg bg-red-100 focus:ring-0 focus:outline-none font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
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
                <h2 className="text-lg text-gray-900 font-medium title-font mt-4 truncate">{name}</h2>
                <p className="text-green-500">
                    {price === '0' ? 'Free' : `$ ${price}`}
                </p>
            </div>
        </>
    )
}


export default CourseTrainingCard;