interface IBotaoProps{
    cor?: 'green' | 'blue' | 'gray'
    className?: string
    children: React.ReactNode
}
export const  Button: React.FC<IBotaoProps> = (props) => {
    const cor = props.cor ?? 'gray'
    return(
        <button className={`
            bg-gradient-to-r
            from-${props.cor}-400
            to-${props.cor}-700
            px-4 py-2 rounded-md
            ${props.className}
        `}>
            {props.children}
        </button>
    )
}