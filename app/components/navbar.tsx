import clsx from "clsx"
import { site } from "../../config/site"
import Button from "./ui/button"
import Menu from "./ui/menu"
import Link from "next/link"
import Container from "./container"

function Navbar(){
    return <Container>
        <nav className={clsx('flex justify-between items-center')}>
        <div className="flex gap-10">
            <Link href={'/'} className={clsx('font-extrabold text-xl')}><span>{site.name.toUpperCase()}</span></Link>
            <Menu/>
        </div>
        <div className="flex gap-4">
            <Button variant="solid">Login</Button>
            <Button>Logout</Button>
        </div>
    </nav>
    </Container>
}

export default Navbar