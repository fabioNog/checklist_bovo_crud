interface IInputProps{
    text: string
    type: string
    value?: any
    readonly?: boolean
    placeholder?: string
}
export const Input = (props: IInputProps) => {
    return (
        <div className="flex flex-col">
            <label className="m-2">
                {props.text}
            </label>
            <input 
                type={props.type} 
                value={props.value} 
                readOnly={props.readonly}
                placeholder={props.placeholder}
                className={`
                    border border-orange-500 rounded-lg
                    focus:outline-none bg-gray-50
                    px-4 py-2 
                    ${props.readonly ? '' : 'focus:bg-white'}
                `}
            />
        </div>
        
    )
}