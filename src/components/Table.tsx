import CheckList from "../core/Checklist"



interface ITableProps{
    checklist: CheckList[];
}

export const Table:React.FC<ITableProps> = (props) => {
    function RenderHeader(){
        return (
            <tr>
                <th>Fazendeiro</th>
                <th>Fazenda</th>
                <th>Cidade</th>
                <th>Data</th>
            </tr>
        )
    }

    function RenderData(){
        return props.checklist?.map((checklist,i) => {
            return (
                <tr key={checklist.id}>
                    <td>{checklist.id}</td>
                    <td>{checklist.nameFarm}</td>
                    <td>{checklist.cityFarm}</td>
                </tr>
            )
        })
    }

    return (
        <table className="w-full">
            <thead className={`
                bg-gradient-to-r 
                from-orange-500
                to-orange-800
                text-gray-100
            `}>
                {RenderHeader()}
            </thead>
            <tbody>
                {RenderData()}
            </tbody>
        </table>
    )
} 