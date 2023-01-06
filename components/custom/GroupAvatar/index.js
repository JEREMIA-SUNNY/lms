import Image from "next/image";

const GroupAvatar = ({ rows, total }) => {

    return (
        <>
            <div className="flex -space-x-4">
                {
                    Array.from(Array(Number(rows)).keys()).map((item) => {
                        return (
                            <div key={item} className="overflow-hidden relative w-9 h-9 rounded-full">
                                <Image src='/demoimage/demo-user.jpeg'
                                    alt='user admin avatar'
                                    className="w-9 h-9 border-2 border-white rounded-full"
                                    height={100}
                                    width={100}
                                    quality={100}
                                    loading="eager" priority={true}
                                />
                            </div>
                        )
                    })
                }
                <div className="z-50 flex items-center justify-center w-9 h-9 text-xs font-medium text-white bg-gray-400 border-2 border-white rounded-full">+{total - rows}</div>
            </div>
        </>
    )
}

export default GroupAvatar;