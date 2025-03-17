import React from 'react'
import shareStyle from '@src/styles/whiteboard/Share.module.css'
import { ShareProps } from '@src/type/components/whiteboard/share.ts'

const Share: React.FC<ShareProps> = (props) => {
    return (
        <div className={shareStyle.share}>
            {props.children}
        </div>
    )
}

export default Share