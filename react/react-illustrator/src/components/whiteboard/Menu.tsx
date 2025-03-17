import React from 'react'
import menuStyle from '@src/styles/whiteboard/Menu.module.css'
import { MenuProps } from '@src/type/components/whiteboard/menu.ts'
import MenuDropdownPortal from '@src/components/whiteboard/portal/MenuDropdownPortal.tsx'

const Menu: React.FC<MenuProps> = ({ showMenuDropdown, setShowMenuDropdown }) => {
    return (
        <>
            <button
                className={menuStyle.menu}
                onClick={() => setShowMenuDropdown(!showMenuDropdown)}
            >
                <i className="fa-solid fa-bars"></i>
            </button>
            {
                showMenuDropdown &&
                <MenuDropdownPortal />
            }
        </>
    )
}

export default Menu