import Image from "next/image";

const GroupAvatar = ({ rows, total, className }) => {

    return (
        <>
            <div className="flex -space-x-3">
                {
                    Array.from(Array(Number(rows)).keys()).map((item) => {
                        return (
                            <div key={item} className={`overflow-hidden relative rounded-full ${className}`}>
                                <Image src={`/demoimage/usericon.webp`}
                                    alt='user admin avatar'
                                    className={`${className} border-2 border-white rounded-full`}
                                    height={40}
                                    width={40}
                                    quality={100}
                                    loading="eager" priority={true}
                                />
                            </div>
                        )
                    })
                }
                <div className={`${className}  z-[4] flex items-center justify-center text-[10px] font-medium text-green-800 bg-green-200 border-2 border-white rounded-full`}>+{total - rows}</div>
            </div>
        </>
    )
}

export default GroupAvatar;