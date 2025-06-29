import React from 'react'
import { portalHandlerElementId } from '@src/helpers/portal-handler.ts'

const PortalHandler: React.FC = () => {
    return (
        <div id={portalHandlerElementId} />
    )
}

export default PortalHandler