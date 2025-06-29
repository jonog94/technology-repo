import React from 'react'
import bottomLayoutStyle from '@src/styles/whiteboard/layout/BottomLayout.module.css'
import { BottomLayoutProps } from '@src/types/components/whiteboard/layout/bottom-layout.ts'

const BottomLayout: React.FC<BottomLayoutProps> = (props) => {
    return (
        <div className={bottomLayoutStyle.bottomLayout}>
            {props.children}
        </div>
    )
}

export default BottomLayout