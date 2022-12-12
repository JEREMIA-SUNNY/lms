import Image from "next/image";
import LoginForm from "../../components/Auth/login";


const Loginlayout = () => {
    return (
        <>
            {/* <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                <div className="md:flex">
                    <div className="md:shrink-0">
                        <img className="h-48 w-full object-cover md:h-full md:w-48" src="/demoimage/loginSide.png" alt="Modern building architecture" />
                    </div>
                    <div className="p-8">
                        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Company retreats</div>
                        <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Incredible accomodation for your team</a>
                        <p className="mt-2 text-slate-500">Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that.</p>
                    </div>
                </div>
            </div> */}

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
            {/* <section className="h-screen">
                <div className="h-full">
                    <div className="h-full flex justify-between">
                        <div className="md:w-[70%] h-full relative">
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
            </section> */}
        </>
    )
}

export default Loginlayout;