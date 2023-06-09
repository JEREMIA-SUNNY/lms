import Link from "next/link";
import { useRouter } from "next/router";

const CustomLink = ({ href, title, count }) => {
    const route = useRouter()
    const { pathname } = route

    return (
        <Link href={href} className={`${pathname === href ? 'text-[#419a00] font-bold text-[12px]' : ''} h-10 px-2 text-[15px]`}>
            {pathname === href ? `[ ${title} ${count !== undefined ? `(${count})` : ''} ]` : title}
        </Link>
    )
}

export default CustomLink;