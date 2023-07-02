import clsx from "clsx";
import Table from "./ui/table";

interface DataProductType {
    coloms: string[]
    data: {id:number, product_name:string, buy:number, sell:number, quantity:number}[]
}

function TableData({ children, className, center=true }:{ children: React.ReactNode, className?: string, center?: boolean}){
    return <td className={clsx(className, 'border-[1px] border-solid border-black', 'p-2', center ? 'text-center' : 'text-left')}>{children}</td>
}

function TableProduct({data, coloms}: DataProductType) {
    return <Table coloms={coloms}>
        {data.map((product, index)=><tr key={index}>
            <TableData>{index + 1}</TableData>
            <TableData center={false}>{product.product_name}</TableData>
            <TableData>{product.buy}</TableData>
            <TableData>{product.sell}</TableData>
            <TableData>{product.quantity}</TableData>
            <TableData>Edit | Delete</TableData>
        </tr>)}
    </Table>
}

export default TableProduct