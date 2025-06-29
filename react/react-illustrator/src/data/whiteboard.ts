import { Tools } from '@src/types/data/whiteboard.ts'
import * as whiteboard from '@src/constants/whiteboard'

export const tools: Tools = [
    {
        id: whiteboard.HAND_TOOL_ID,
        name: whiteboard.HAND_TOOL_NAME,
        tooltip: whiteboard.HAND_TOOL_TOOLTIP,
        icon: whiteboard.HAND_TOOL_ICON
    },
    {
        id: whiteboard.SELECTION_TOOL_ID,
        name: whiteboard.SELECTION_TOOL_NAME,
        tooltip: whiteboard.SELECTION_TOOL_TOOLTIP,
        icon: whiteboard.SELECTION_TOOL_ICON
    },
    {
        id: whiteboard.RECTANGLE_TOOL_ID,
        name: whiteboard.RECTANGLE_TOOL_NAME,
        tooltip: whiteboard.RECTANGLE_TOOL_TOOLTIP,
        icon: whiteboard.RECTANGLE_TOOL_ICON
    },
    {
        id: whiteboard.DIAMOND_TOOL_ID,
        name: whiteboard.DIAMOND_TOOL_NAME,
        tooltip: whiteboard.DIAMOND_TOOL_TOOLTIP,
        icon: whiteboard.DIAMOND_TOOL_ICON
    },
    {
        id: whiteboard.ELLIPSE_TOOL_ID,
        name: whiteboard.ELLIPSE_TOOL_NAME,
        tooltip: whiteboard.ELLIPSE_TOOL_TOOLTIP,
        icon: whiteboard.ELLIPSE_TOOL_ICON
    },
    {
        id: whiteboard.ARROW_TOOL_ID,
        name: whiteboard.ARROW_TOOL_NAME,
        tooltip: whiteboard.ARROW_TOOL_TOOLTIP,
        icon: whiteboard.ARROW_TOOL_ICON
    },
    {
        id: whiteboard.LINE_TOOL_ID,
        name: whiteboard.LINE_TOOL_NAME,
        tooltip: whiteboard.LINE_TOOL_TOOLTIP,
        icon: whiteboard.LINE_TOOL_ICON
    },
    {
        id: whiteboard.DRAW_TOOL_ID,
        name: whiteboard.DRAW_TOOL_NAME,
        tooltip: whiteboard.DRAW_TOOL_TOOLTIP,
        icon: whiteboard.DRAW_TOOL_ICON
    },
    {
        id: whiteboard.TEXT_TOOL_ID,
        name: whiteboard.TEXT_TOOL_NAME,
        tooltip: whiteboard.TEXT_TOOL_TOOLTIP,
        icon: whiteboard.TEXT_TOOL_ICON
    },
    {
        id: whiteboard.IMAGE_TOOL_ID,
        name: whiteboard.IMAGE_TOOL_NAME,
        tooltip: whiteboard.IMAGE_TOOL_TOOLTIP,
        icon: whiteboard.IMAGE_TOOL_ICON
    },
    {
        id: whiteboard.ERASER_TOOL_ID,
        name: whiteboard.ERASER_TOOL_NAME,
        tooltip: whiteboard.ERASER_TOOL_TOOLTIP,
        icon: whiteboard.ERASER_TOOL_ICON
    }
]