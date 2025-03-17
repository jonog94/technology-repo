import React from 'react'
import { portalHandlerElementId } from '@src/helpers/portal-handler.ts'
import portalHandlerStyle from '@src/styles/whiteboard/portal/PortalHandler.module.css'

const PortalHandler: React.FC = () => {
    return (
        <div id={portalHandlerElementId} className={portalHandlerStyle.portalHandler} />
    )
}

export default PortalHandler