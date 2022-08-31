import Link from 'next/link'

interface  ILinkProps{
    href: string
    children: React.ReactNode
}

export const MyLink = (props:ILinkProps) => {
    return (
        <Link href={props.href} >
           { props.children }
        </Link>
    )
}