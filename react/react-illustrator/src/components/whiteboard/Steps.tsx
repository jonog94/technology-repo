import React from 'react'
import stepsStyle from '@src/styles/whiteboard/Steps.module.css'

const Steps: React.FC = () => {
    return (
        <div className={stepsStyle.steps}>
            <button className={stepsStyle.previous}>
                <i className="fa-solid fa-arrow-left"></i>
            </button>
            <button className={stepsStyle.next}>
                <i className="fa-solid fa-arrow-right"></i>
            </button>
        </div>
    )
}

export default Steps