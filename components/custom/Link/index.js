import Link from "next/link";
import { useRouter } from "next/router";

const CustomLink = ({ href, title }) => {
    const route = useRouter()
    const { pathname } = route

    return (
        <Link href={href} className={`${pathname === href ? 'text-[#419a00] font-semibold' : 'font-normal'} h-10 px-2`}>
            {pathname === href ? `[ ${title} ]` : title}
        </Link>
    )
}

export default CustomLink;