import Image from "next/image";
import LoginForm from "../../components/Auth/login";

const Loginlayout = () => {
    return (
        <>
            <section className="h-screen">
                <div className="h-full">
                    <div className="h-full md:flex">
                        <div className="h-[18rem] mb-2 md:h-full md:w-[70%] relative">
                            <Image
                                layout="fill"
                                objectFit="cover"
                                quality={100}
                                src={'/demoimage/loginSide.png'}
                                alt="Sample image"
                            />
                        </div>
                        <div className="md:w-[30%] flex justify-center items-center">
                            <LoginForm />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Loginlayout;