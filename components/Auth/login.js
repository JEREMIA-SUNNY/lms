import Image from "next/image";
import Link from "next/link";

const LoginForm = () => {
    return (
        <div className="w-full">
            <div className="w-full flex justify-center">
                <div className="relative">
                    <Image
                        width={120}
                        height={120}
                        src={'/logo/login-logo.png'}
                        alt="Sample image"
                    />
                </div>
            </div>
            <div className="p-6 space-y-2 sm:p-8">
                <form className="space-y-4 md:space-y-6">
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                        <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                        <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                    </div>
                    <div className="flex justify-center">
                        <button type="submit" className="w-[70%] text-white bg-[#27135F] hover:bg-[#27135F] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded text-sm px-5 py-2.5 text-center dark:bg-[#27135F] dark:hover:bg-[#27135F] dark:focus:ring-primary-800">Login</button>
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