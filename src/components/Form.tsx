import CheckList from "../core/Checklist"
import { Input } from "./Input"
import { InputSelect } from "./InputSelect"


type CheckListTypeComplete = {
    _id: string
    type: string
    amount_of_milk_produced: number
    farmer: {
        name: string
        city: string
    }
    from: {
        name: string
    }

    to: {
        name: string
    }
    number_of_cows_head: string
    had_supervision: boolean
    created_at: string
    updated_at: string
}

interface IFormProps{
    /* checklist: CheckListTypeComplete */
    teste: string
}

export const Form = (props: IFormProps) => {
    return(
        <div>
            <Input text="Fazendeiro" type="text" placeholder="Nome do Fazendeiro"/>
            <Input text="Fazenda" type="text" placeholder="Nome da Fazenda"/>
            <Input text="Cidade" type="text" placeholder="Nome da Cidade"/>
            <Input text="Supervisor" type="text" placeholder="Nome do Supervisor"/>
            <InputSelect/>
            <Input text="Quantidade de Leite" type="number" placeholder="Nome do Supervisor"/>
        </div>
        
    )
}