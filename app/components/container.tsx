import clsx from "clsx"

interface ContainerType {
    children: React.ReactNode
    className?: string
}

function Container({ children, className }: ContainerType){
    return <section className={clsx('px-32 py-6', className)}>{children}</section>
}

export default Container