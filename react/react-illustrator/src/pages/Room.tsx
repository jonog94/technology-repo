import React, { useState } from 'react'
import Help from '@src/components/whiteboard/Help.tsx'
import Menu from '@src/components/whiteboard/Menu.tsx'
import Zoom from '@src/components/whiteboard/Zoom.tsx'
import Steps from '@src/components/whiteboard/Steps.tsx'
import Share from '@src/components/whiteboard/Share.tsx'
import Avatar from '@src/components/whiteboard/Avatar.tsx'
import ToolBox from '@src/components/whiteboard/ToolBox.tsx'
import Controls from '@src/components/whiteboard/Controls.tsx'
import shareStyle from '@src/styles/whiteboard/Share.module.css'
import Whiteboard from '@src/components/whiteboard/Whiteboard.tsx'
import CanvasBoard from '@src/components/whiteboard/CanvasBoard.tsx'
import TopLayout from '@src/components/whiteboard/layout/TopLayout.tsx'
import BottomLayout from '@src/components/whiteboard/layout/BottomLayout.tsx'
import PortalHandler from '@src/components/whiteboard/portal/PortalHandler.tsx'

const Room: React.FC = () => {
    const [showMenuDropdown, setShowMenuDropdown] = useState(false)
    const [showPalette, setShowPalette] = useState(false)

    return (
        <Whiteboard>
            <TopLayout>
                <Menu
                    showMenuDropdown={showMenuDropdown}
                    setShowMenuDropdown={setShowMenuDropdown}
                />
                <ToolBox
                    showPalette={showPalette}
                    setShowPalette={setShowPalette}
                />
                <Share>
                    <Avatar />
                    <button type="button" className={shareStyle.btnShare}>
                        Share
                    </button>
                </Share>
            </TopLayout>
            <PortalHandler />
            <CanvasBoard/>
            <BottomLayout>
                <Controls>
                    <Zoom />
                    <Steps />
                </Controls>
                <Help />
            </BottomLayout>
        </Whiteboard>
    )
}

export default Room