import React from 'react'
import { tools } from '@src/data/whiteboard.ts'
import toolBoxStyle from '@src/styles/whiteboard/ToolBox.module.css'
import { ToolBoxProps } from '@src/types/components/whiteboard/tool-box.ts'

const ToolBox: React.FC<ToolBoxProps> = () => {
    return (
        <>
            <div className={toolBoxStyle.whiteboardToolBox}>
                {tools.map((tool) => {
                    return (
                        <button key={tool.id} className={`${toolBoxStyle.whiteboardToolButton}`}>
                            <i className={`fa-solid ${tool.icon}`}></i>
                        </button>
                    )
                })}
            </div>
        </>
    )
}

export default ToolBox