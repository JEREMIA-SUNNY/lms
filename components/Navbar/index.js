import Image from "next/image";
import Link from "next/link";
import CustomLink from '../custom/Link'

import navbarmenuList from 'assets/Menu/navbar.json'
import ProfilePopup from "./profilePopup";

const Navbar = () => {

    return (
        <div className="w-full h-14 z-50 fixed top-0 right-0 bg-[#e6e6e6]">
            <div className="rounded-lg py-3 m-5 shadow-lg bg-white flex items-center justify-between">
                <Link href='/app/home' className="relative">
                    <Image
                        width={90}
                        height={90}
                        src={'/logo/login-logo.png'}
                        alt="Sample image"
                    />
                </Link>
                <nav className="container mx-auto flex items-center">
                    <ul className="w-[80%] flex justify-between">
                        {navbarmenuList?.map((item) => {
                            return (
                                <li key={item?.id}>
                                    <CustomLink title={item?.title} href={item?.link} />
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