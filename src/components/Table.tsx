import CheckList from "../core/Checklist"



interface ITableProps{
    checklist: CheckList[];
}

export const Table:React.FC<ITableProps> = (props) => {
    function RenderHeader(){
        return (
            <tr>
                <th className="text-left p-4">Fazendeiro</th>
                <th className="text-left p-4">Fazenda</th>
                <th className="text-left p-4">Cidade</th>
                <th className="text-left p-4">Data</th>
            </tr>
        )
    }

    function RenderData(){
        return props.checklist?.map((checklist,i) => {
            return (
                <tr key={checklist.id} className={`
                    ${i % 2 === 0 ? 'bg-orange-200': 'bg-orange-100'}
                `}>
                    <td >{checklist.id}</td>
                    <td className="text-left p-4">{checklist.nameFarm}</td>
                    <td className="text-left p-4">{checklist.cityFarm}</td>
                    <td className="text-left p-4">24/5/2022</td>
                </tr>
            )
        })
    }

    return (
        <table className="w-full rounded-xl overflow-hidden">
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