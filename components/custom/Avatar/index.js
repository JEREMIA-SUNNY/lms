import Image from "next/image";

const Avatar = ({ alt, src }) => {
    return (
        <>
            {
                src ? <div className="w-[46px] h-[46px] flex justify-center items-center p-1 group-hover:bg-[url('/electric.gif')] bg-no-repeat bg-cover bg-center">
                    <Image
                        className="rounded-full object-cover object-center"
                        height={300}
                        width={300}
                        quality={100}
                        loading="eager" priority={true}
                        alt={alt} src={src}
                    />
                </div> : <div className="inline-flex overflow-hidden relative justify-center items-center border-2 border-gray-100 w-10 h-10 bg-gray-100 rounded-full">
                    <span className="font-medium text-gray-600">{alt[0]}</span>
                </div>
            }
           
        </>
    )
}

export default Avatar;