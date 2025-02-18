import React from 'react'
import controlsStyle from '@src/styles/whiteboard/Controls.module.css'

interface ControlsProps {
    children?: React.ReactNode
}

const Controls: React.FC<ControlsProps> = (props) => {
    return (
        <div className={controlsStyle.controls}>
            {props.children}
        </div>
    )
}

export default Controls