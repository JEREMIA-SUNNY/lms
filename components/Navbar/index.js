import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import MenuList from './menu.json'
import ProfilePopup from "./profilePopup";

const Navbar = () => {
    const { pathname } = useRouter()

    return (
        <div className="w-full">
            <div className="rounded-lg m-5 shadow bg-white flex items-center justify-between">
                <Link href='/app/home' className="relative">
                    <Image
                        width={90}
                        height={90}
                        src={'/logo/login-logo.png'}
                        alt="Sample image"
                    />
                </Link>
                <nav className="w-full flex items-center">
                    <ul className="w-full flex justify-evenly">
                        {MenuList?.map((item) => {
                            return (
                                <li key={item?.id}>
                                    <Link href={item?.link} className={`${pathname === item.link ? 'underline font-bold' : 'font-normal'} text-[#419a00] py-2 pl-3 pr-4 md:p-0`} aria-current="page">{item?.title}</Link>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
                <ProfilePopup />
            </div>
        </div>
    )
}

export default Navbar;