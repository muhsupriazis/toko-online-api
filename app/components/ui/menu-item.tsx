import {clsx} from "clsx";
import Link from "next/link";

interface MenuItemType {
    className?: string
    name: string
    url: string
}

function MenuItem({name, url, className}: MenuItemType){
    return <li className={clsx('text-black', 'border-b-[1px] border-transparent', 'hover:border-black', className)}>
        <Link href={url} >{name}</Link>
    </li>
}

export default MenuItem