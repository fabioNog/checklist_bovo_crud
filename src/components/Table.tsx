import { iconEdit, iconEye, iconTrash } from "./icon"

type CheckListType = {
    _id: string
    type: string
    created_at: string
    from: {
        name: string
    }
    farmer: {
        name: string
        city: string
    }
}

type TableProps = {
    checklist: CheckListType[];
    checklistEdit?: (checklist: CheckListType) => void
    checklistExcluded?: (checklist: CheckListType) => void
    checklistList?: (checklist: CheckListType) => void
}

export const Table = (props: TableProps) => {

    const displayActions = props.checklistEdit || props.checklistExcluded || props.checklistList;

    function RenderHeader() {
        return (
            <tr>
                <th className="text-left p-4">Fazendeiro</th>
                <th className="text-left p-4">Fazenda</th>
                <th className="text-left p-4">Cidade</th>
                <th className="text-left p-4">Data</th>
                {displayActions ? <th className="text-left p-4">Ações</th> : false}
            </tr>
        )
    }

    function RenderData() {
        return props.checklist?.map((checklist, i) => {
            return (

                <tr key={i} className={`
                      ${i % 2 === 0 ? 'bg-orange-200' : 'bg-orange-100'}
                  `}>
                    <td >{checklist.from.name}</td>
                    <td className="text-left p-4">{checklist.farmer.name}</td>
                    <td className="text-left p-4">{checklist.farmer.city}</td>
                    <td className=" p-4">{checklist.created_at}</td>
                    {RenderActions(checklist)}
                </tr>
            )
        })

    }

    function RenderActions(checklist: CheckListType) {
        return (

            <td className="flex justify-center">
                {props.checklistEdit ? (
                    <button className={`
                        flex 
                        justify-center 
                        items-center
                        text-green-600
                        rounded-full p-2 m-1
                        hover:bg-orange-50
                    `}
                    onClick={() => props.checklistEdit?.(checklist)}
                    >       
                        {iconEdit}
                    </button>
                ) : false}

                {props.checklistExcluded ? (
                    <button className={`
                        flex 
                        justify-center 
                        items-center
                        text-red-500
                        rounded-full p-2 m-1
                        hover:bg-orange-50
                    `}
                    onClick={() => props.checklistExcluded?.(checklist)}
                    >
                        {iconTrash}
                    </button>
                ) : false}

                {props.checklistList ? (
                   <button className={`
                        flex 
                        justify-center 
                        items-center
                        text-purple-700
                        rounded-full p-2 m-1
                        hover:bg-orange-50
                    `}
                    onClick={() => props.checklistEdit?.(checklist)}
                    >
                        {iconEye}
                   </button>
                ) : false}

            </td>
        )
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
