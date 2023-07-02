
interface TableType {
    coloms: string[]
    children: React.ReactNode
}

function Table({coloms, children}:TableType){
    return <table className="w-full">
        <thead>
            <tr>
                {coloms.map((colom, index)=> <th  className="border-[1px] border-solid border-black p-2" key={index}>{colom}</th>)}
            </tr>
        </thead>
        <tbody>
            {children}
        </tbody>
    </table>
}

export default Table