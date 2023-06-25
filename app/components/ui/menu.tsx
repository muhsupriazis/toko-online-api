import { site } from "@/config/site";
import MenuItem from "./menu-item";
import clsx from "clsx";

interface MenuType {
    className?: string
}

function Menu({className}: MenuType){
    return <ul className={clsx('flex justify-center items-center gap-4', className)}>
        {site.menu.map((menuitem, index)=> <MenuItem name={menuitem.name} url={menuitem.url} key={index}/>)}
    </ul>
}

export default Menu