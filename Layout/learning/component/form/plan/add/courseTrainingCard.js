import Image from "next/image";

const CourseTrainingCard = ({ item, removeSelected }) => {
    const { thumnnail, name, price } = item
    return (
        <>
            <div className="p-2 rounded-lg shadow-xl bg-white  w-full">
                <div className="relative">
                    <button onClick={() => removeSelected(item)} className="absolute top-0 right-0  m-1 w-10 h-10 flex justify-center items-center text-red-400 shadow-lg bg-red-100 focus:ring-0 focus:outline-none font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center">
                        X
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
                <p>
                    {price === '0' ? 'Free' : `$ ${price}`}
                </p>
            </div>
        </>
    )
}


export default CourseTrainingCard;