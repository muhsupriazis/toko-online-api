import clsx from "clsx";

interface HeaderType {
    children: React.ReactNode
    className?: string
}

function Header({children, className} : HeaderType){
    return <h1 className={clsx('font-bold text-2xl', className)}>{children}</h1>
}

export default Header