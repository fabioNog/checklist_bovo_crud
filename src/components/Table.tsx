import CheckList from "../core/Checklist"



interface ITableProps{
    checklist: CheckList[];
}

export const Table:React.FC<ITableProps> = (props) => {
    function RenderHeader(){
        return (
            <tr>
                <th>Nome Do Fazendeiro</th>
                <th>Nome Fazenda</th>
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
        <table>
            <thead>
                {RenderHeader()}
            </thead>
            <tbody>
                {RenderData()}
            </tbody>
        </table>
    )
} 