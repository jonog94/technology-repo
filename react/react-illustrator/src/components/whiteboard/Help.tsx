import React from 'react'
import helpStyle from '@src/styles/whiteboard/Help.module.css'

const Help: React.FC = () => {
    return (
        <div className={helpStyle.help}>
            <button>
                <i className="fa-solid fa-question-circle"></i>
            </button>
        </div>
    )
}

export default Help