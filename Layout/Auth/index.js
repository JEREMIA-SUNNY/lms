import LoginForm from "../../components/Auth/login";

const Loginlayout = () => {
    return (
        <>
            <section className={`h-screen bg-[url('/demoimage/loginSide.png')] bg-no-repeat bg-cover bg-center`}>
                <div className="h-full flex justify-center items-center">
                    <div className="backdrop-blur-[5px] bg-white/70  rounded-lg shadow-md">
                        <LoginForm />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Loginlayout;