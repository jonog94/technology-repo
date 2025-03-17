import React from 'react'
import TopLayoutStyle from '@src/styles/whiteboard/layout/TopLayout.module.css'
import { TopLayoutProps } from '@src/type/components/whiteboard/layout/top-layout.ts'

const TopLayout: React.FC<TopLayoutProps> = (props) => {
    return (
        <div className={TopLayoutStyle.topLayout}>
            {props.children}
        </div>
    )
}

export default TopLayout