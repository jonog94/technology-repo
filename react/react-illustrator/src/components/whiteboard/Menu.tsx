import React from 'react'
import menuStyle from '@src/styles/whiteboard/Menu.module.css'

const Menu: React.FC = () => {
    return (
        <div className={menuStyle.menu}>
            <i className="fa-solid fa-bars"></i>
        </div>
    )
}

export default Menu