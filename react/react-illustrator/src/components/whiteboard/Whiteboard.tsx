import React from 'react'
import { WhiteboardProps } from '@src/type/components/whiteboard/whiteboard.ts'

const Whiteboard: React.FC<WhiteboardProps> = (props) => {
    return (
        <div className="relative w-screen h-screen">
            {props.children}
        </div>
    )
}

export default Whiteboard