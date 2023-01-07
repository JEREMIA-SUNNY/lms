import Image from "next/image";

const GroupAvatar = ({ rows, total }) => {
    
    return (
        <>
            <div className="flex -space-x-4">
                {
                    Array.from(Array(Number(rows)).keys()).map((item) => {
                        return (
                            <div key={item} className="overflow-hidden relative w-9 h-9 rounded-full">
                                <Image src={`/happy-people-avatars/${Math.floor(Math.random() * 5) + 1}.png`}
                                    alt='user admin avatar'
                                    className="w-8 h-8 border-2 border-white rounded-full"
                                    height={60}
                                    width={60}
                                    quality={100}
                                    loading="eager" priority={true}
                                />
                            </div>
                        )
                    })
                }
                <div className="z-[4] flex items-center justify-center w-8 h-8 text-[10px] font-medium text-gray-500 bg-gray-300 border-2 border-white rounded-full">+{total - rows}</div>
            </div>
        </>
    )
}

export default GroupAvatar;