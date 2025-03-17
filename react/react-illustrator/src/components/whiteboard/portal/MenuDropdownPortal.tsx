import React from 'react'
import { createPortal } from 'react-dom'
import MenuDropdown from '@src/components/whiteboard/MenuDropdown.tsx'
import { portalHandlerElementId } from '@src/helpers/portal-handler.ts'

const MenuDropdownPortal: React.FC  = () => {
    return createPortal(
        <MenuDropdown />,
        document.getElementById(portalHandlerElementId)!
    )
}

export default MenuDropdownPortal