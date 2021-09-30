import React, { ReactNode } from 'react';

interface IProps{
    children: ReactNode
}

const Scroll = (props: IProps) => {


    return (
        <div style={{overflow: "scroll", height: "800px", border: "2px solid black"}}>
            {props.children}
        </div>
    )
}


export default Scroll;