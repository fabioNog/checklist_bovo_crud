interface IBotaoProps{
    cor?: 'green' | 'blue' | 'gray'
    className?: string
    children: React.ReactNode
}
export const  Botao: React.FC<IBotaoProps> = (props) => {
    const cor = props.cor ?? 'gray'
    return(
        <button className={`
            bg-gradient-to-r
            from-green-400
            to-green-700
            px-4 py-2 rounded-md
            ${props.className}
        `}>
            {props.children}
        </button>
    )
}