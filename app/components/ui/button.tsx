import clsx from "clsx";

interface ButtonType {
    variant?: 'line' | 'solid'
    children: string
    className?: string
}

function Button({children, className, variant}: ButtonType){
    return <button className={clsx('py-2 px-4', 'border-[1px] border-black hover:underline', variant === 'solid' && 'bg-black text-white'  , className)} >{children}</button>
}

export default Button