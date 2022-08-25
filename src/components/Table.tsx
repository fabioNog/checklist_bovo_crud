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

    return (
        <table>
            {RenderHeader()}
        </table>
    )
} 