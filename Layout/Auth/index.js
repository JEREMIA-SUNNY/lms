import LoginForm from "../../components/Auth/login";

const Loginlayout = () => {
    return (
        <>
            <section className={`h-screen bg-[url('/demoimage/loginSide.png')] bg-no-repeat bg-cover bg-center`}>
                <div className="h-full flex justify-center items-center">
                    <div className="backdrop-blur-lg bg-white/20 rounded-md shadow-md bg-white">
                        <LoginForm />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Loginlayout;