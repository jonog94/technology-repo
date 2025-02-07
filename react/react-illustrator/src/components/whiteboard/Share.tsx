import React from 'react'
import shareStyle from '@src/styles/whiteboard/Share.module.css'

interface ShareProps {
    children?: React.ReactNode
}

const Share: React.FC<ShareProps> = (props) => {
    return (
        <div className={shareStyle.share}>
            {props.children}
        </div>
    )
}

export default Share