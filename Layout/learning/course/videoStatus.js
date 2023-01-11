import Image from "next/image";
import ReactPlayer from 'react-player/lazy'
import Modal from "@/components/Modal";

const VideoStatus = ({ item }) => {

    return (
        <>
            <div className="shadow bg-white p-4 rounded-lg">
                <Modal
                    TitleIcon={<Image
                        className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 h-40 rounded-lg w-full object-cover object-center"
                        height={200}
                        width={200}
                        quality={100}
                        src='/demoimage/module.webp'
                        alt="Sample image"
                    />}
                    ui={<ReactPlayer width={'100%'} height={'100%'} url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />}
                />
                <h2 className="text-lg text-gray-900 font-medium title-font">Lorem ipsum</h2>
                <p className="leading-relaxed text-sm text-gray-500 leading-4">
                    In publishing and graphic design, Lorem ipsum
                    In publishing and graphic design, Lorem ipsum
                </p>

                <div className="flex justify-start items-center">
                    <div className="my-2 h-2 rounded-full w-full bg-gray-200">
                        <div className={`h-2 rounded-full w-[80%] bg-[#409a00]`}>
                        </div>
                    </div>
                    <p className="ml-2 font-bold text-xs text-gray-400">80%</p>
                </div>
            </div>
        </>

    )
}

export default VideoStatus;