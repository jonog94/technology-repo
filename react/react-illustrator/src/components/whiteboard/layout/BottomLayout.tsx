import React from 'react'
import bottomLayoutStyle from '@src/styles/whiteboard/layout/BottomLayout.module.css'

interface BottomLayoutProps {
    children?: React.ReactNode;
}

const BottomLayout: React.FC<BottomLayoutProps> = (props) => {
    return (
        <div className={bottomLayoutStyle.bottomLayout}>
            {props.children}
        </div>
    )
}

export default BottomLayout