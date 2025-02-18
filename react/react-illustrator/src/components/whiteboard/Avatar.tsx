import React from 'react'
import ubuntuStyle from '@src/styles/font/Ubuntu.module.css'
import avatarStyle from '@src/styles/whiteboard/Avatar.module.css'

const Avatar: React.FC = () => {
    return (
        <div className={`${avatarStyle.avatar} absolute -left-12`}>
            <span className={ubuntuStyle.ubuntuMedium}>
                J
            </span>
        </div>
    )
}

export default Avatar