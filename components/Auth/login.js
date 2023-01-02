import Image from "next/image";
import Link from "next/link";

const LoginForm = () => {
    return (
        <div className="flex justify-between items-center">
            <div className="w-[330px] relative flex justify-center items-center">
                <Image
                    width={200}
                    height={200}
                    src={'/logo/login-logo.png'}
                    alt="Sample image"
                />
            </div>
            <div className="w-[330px] p-6 space-y-2 sm:p-8">
                <form className="space-y-4 md:space-y-6">
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email</label>
                        <input type="email" name="email" id="email" className="outline-gray-200 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="name@company.com" required="" />
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                        <input type="password" name="password" id="password" placeholder="••••••••" className="outline-gray-200 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required="" />
                    </div>
                    <div className="flex justify-center">
                        <Link href='/app/learning/courses' className="w-[70%] text-white bg-[#419a00] hover:bg-[#419a00] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-[#419a00] dark:hover:bg-[#419a00] dark:focus:ring-primary-800">
                            Login
                        </Link>
                    </div>
                    <div className="flex justify-between">
                        <Link href="/forgot-password" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</Link>
                        <Link href="/view-user-guide" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">View User Guide</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default LoginForm;