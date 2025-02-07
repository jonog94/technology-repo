import React from 'react'
import TopLayoutStyle from '@src/styles/whiteboard/layout/TopLayout.module.css'

interface TopLayoutProps {
    children?: React.ReactNode;
}

const TopLayout: React.FC<TopLayoutProps> = (props) => {
    return (
        <div className={TopLayoutStyle.topLayout}>
            {props.children}
        </div>
    )
}

export default TopLayout