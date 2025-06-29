import React from 'react'
import shareStyle from '@src/styles/whiteboard/Share.module.css'
import { ShareProps } from '@src/types/components/whiteboard/share.ts'

const Share: React.FC<ShareProps> = (props) => {
    return (
        <div className={shareStyle.share}>
            {props.children}
        </div>
    )
}

export default Share