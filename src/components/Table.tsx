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
  }
  
  export const Table = ({ checklist }: TableProps) => {
      function RenderHeader(){
          return (
              <tr>
                  <th className="text-left p-4">Fazendeiro</th>
                  <th className="text-left p-4">Fazenda</th>
                  <th className="text-left p-4">Cidade</th>
                  <th className="text-left p-4">Data</th>
                  <th className="text-left p-4">Ações</th>
              </tr>
          )
      }

      function RenderData(){
          return checklist?.map((checklist, i) => {
              return (
                
                  <tr key={i} className={`
                      ${i % 2 === 0 ? 'bg-orange-200': 'bg-orange-100'}
                  `}>
                      <td >{checklist.from.name}</td>
                      <td className="text-left p-4">{checklist.farmer.name}</td>
                      <td className="text-left p-4">{checklist.farmer.city}</td>
                      <td className=" p-4">{checklist.created_at}</td>
                      {RenderActions()}
                  </tr>
                
              )
          })
  
      }

      function RenderActions(){
        return (
            <td>
                <button>{iconEdit}</button>
                <button>{iconTrash}</button>
                <button>{iconEye}</button>
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
  