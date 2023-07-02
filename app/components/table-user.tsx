import Table from "./ui/table";

interface TableUserType {
    coloms: string[],
    data: {
        id: number,
        username: string,
        password: string,
        phone: number,
    }[]
}

function TableUser({coloms, data}: TableUserType){
    return <Table coloms={coloms}>
        {data.map((user, index)=><tr key={index}>
            
        </tr>)}
    </Table>
}