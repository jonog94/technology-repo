import React from 'react'
import controlsStyle from '@src/styles/whiteboard/Controls.module.css'
import { ControlsProps } from '@src/types/components/whiteboard/controls.ts'

const Controls: React.FC<ControlsProps> = (props) => {
    return (
        <div className={controlsStyle.controls}>
            {props.children}
        </div>
    )
}

export default Controls