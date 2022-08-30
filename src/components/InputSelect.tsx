export const InputSelect = () => {
    return(
        
        <div className="flex flex-col ">
            <label className="m-2">
                Tipo de Checklist
            </label>
            <select 
                name="" 
                id="" 
                className={`
                    border border-orange-500 rounded-lg
                    focus:outline-none bg-gray-50
                    px-4 py-2                     
                `}>
                <option disabled>Selecione um opção</option>
                <option value="1">BPA</option>
                <option value="2">Antibiótico</option>
                <option value="3">BPF</option>
            </select>
        </div>
        
    )
}