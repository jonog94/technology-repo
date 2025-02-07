import React from 'react'
import Menu from '@src/components/whiteboard/Menu.tsx'
import Share from '@src/components/whiteboard/Share.tsx'
import ToolBox from '@src/components/whiteboard/ToolBox.tsx'
import Whiteboard from '@src/components/whiteboard/Whiteboard.tsx'
import CanvasBoard from '@src/components/whiteboard/CanvasBoard.tsx'
import TopLayout from '@src/components/whiteboard/layout/TopLayout.tsx'
import BottomLayout from '@src/components/whiteboard/layout/BottomLayout.tsx'

const Room: React.FC = () => {
    return (
        <Whiteboard>
            <TopLayout>
                <Menu />
                <ToolBox />
                <Share>
                    <p>test</p>
                </Share>
            </TopLayout>
            <CanvasBoard />
            <BottomLayout>

            </BottomLayout>
        </Whiteboard>
    )
}

export default Room