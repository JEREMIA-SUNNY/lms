import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import MenuList from './menu.json'
import ProfilePopup from "./profilePopup";

const Navbar = () => {
    const { pathname } = useRouter()

    return (
        <div className="flex justify-start">
            <Link href='/app/home' className="relative flex items-center">
                <Image
                    width={90}
                    height={90}
                    src={'/logo/login-logo.png'}
                    alt="Sample image"
                />
            </Link>
            <nav className="w-full flex items-center justify-between bg-[#419a00] px-5">
                <ul className="w-[80%] flex justify-between">
                    {MenuList?.map((item) => {
                        return (
                            <li key={item?.id}>
                                <Link href={item?.link} className={`${pathname === item.link ? 'underline text-white font-bold' : 'text-gray-100 font-normal'} py-2 pl-3 pr-4 md:p-0`} aria-current="page">{item?.title}</Link>
                            </li>
                        )
                    })}
                </ul>
                <ProfilePopup />
            </nav>
        </div>
    )
}

export default Navbar;