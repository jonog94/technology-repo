import React, { useEffect, useRef } from 'react'
import canvasStyle from '@src/styles/whiteboard/Canvas.module.css'

const CanvasBoard: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        // Set canvas dimensions to match the screen size
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight

        // Handle resizing to keep the canvas full screen
        const handleResize = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        }

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        <canvas
            ref={canvasRef}
            className={canvasStyle.whiteboardCanvas}
        />
    )
}

export default CanvasBoard