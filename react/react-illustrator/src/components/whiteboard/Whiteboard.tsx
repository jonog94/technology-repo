import React from 'react'

interface WhiteboardProps {
    children?: React.ReactNode;
}

const Whiteboard: React.FC<WhiteboardProps> = (props) => {
    return (
        <div className="relative w-screen h-screen">
            {props.children}
        </div>
    )
}

export default Whiteboard