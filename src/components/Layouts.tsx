import { MyLink } from "./MyLink"
import { Title} from "./Title"


import Link from 'next/link'


interface ILayoutProps{
    title: string,
    children: any
    href: string
    mostrarLink?: boolean
}

export const Layouts:React.FC<ILayoutProps> = (props) => {



    return(
        <>
            {props.mostrarLink

            ?                 
                    <div className={`
                        flex
                        flex-col 
                        w-2/3
                        bg-white
                        text-gray-800
                        rounded-md
                    `}>      <MyLink href={props.href}>
                                    <button className={`
                                        bg-gradient-to-r
                                        from-blue-400
                                        to-blue-700
                                        px-4 py-2 rounded-md
                                        text-white  
                                    `}>
                                        {props.title}
                                    </button>
                                </MyLink>
                                <div className="p-6">
                                    {props.children}
                                </div>
                                          
                        
                    </div>
            
            : <div className={`
                    flex
                    flex-col 
                    w-2/3
                    bg-white
                    text-gray-800
                    rounded-md
                `}>                    
                        <Title>{props.title}</Title>

                        <div className="p-6">
                            {props.children}
                        </div>
                </div>
            }
                
        </>
    )
}