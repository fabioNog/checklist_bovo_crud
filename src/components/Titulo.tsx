import React from 'react';

interface IProps{
    children: React.ReactNode
}

export const Titulo:React.FC<IProps> = (props) => {
    return (
        <div>
            <h1>{props.children}</h1>
            <hr />
        </div>
    )
}