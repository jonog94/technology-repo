import React from 'react'
import { createPortal } from 'react-dom'
import Palette from '@src/components/whiteboard/palette/Palette.tsx'
import { portalHandlerElementId } from '@src/helpers/portal-handler.ts'

const PalettePortal: React.FC = () => {
    return createPortal(
        <Palette />,
        document.getElementById(portalHandlerElementId)!
    )
}

export default PalettePortal