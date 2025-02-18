import React from 'react'
import zoomStyle from '@src/styles/whiteboard/Zoom.module.css'

const Zoom: React.FC = () => {
    return (
        <div className={zoomStyle.zoom}>
            <button className={zoomStyle.minus}>
                <i className="fa-solid fa-minus"></i>
            </button>
            <span>100%</span>
            <button className={zoomStyle.plus}>
                <i className="fa-solid fa-plus"></i>
            </button>
        </div>
    )
}

export default Zoom