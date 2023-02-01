import Link from "next/link";
import { useRouter } from "next/router";

const CustomLink = ({ href, title }) => {
    const route = useRouter()
    const { pathname } = route
    console.log(pathname);
    return (
        <Link href={href} className={`${pathname === href ? 'text-[#419a00] font-bold text-[12px]' : ''} h-10 px-2 text-[15px]`}>
            {pathname === href ? `[ ${title} ]` : title}
        </Link>
    )
}

export default CustomLink;