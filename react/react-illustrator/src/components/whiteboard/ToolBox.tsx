import toolBoxStyle from '@src/styles/whiteboard/ToolBox.module.css'

const ToolBox = () => {
    return (
        <div className={toolBoxStyle.whiteboardToolBox}>
            <button className={`${toolBoxStyle.whiteboardToolButton} mr-1`}>
                <i className="fa-solid fa-hand"></i>
            </button>
            <button className={`${toolBoxStyle.whiteboardToolButton} ml-1 mr-1`}>
                <i className="fa-solid fa-arrow-pointer"></i>
            </button>
            <button className={`${toolBoxStyle.whiteboardToolButton} ml-1 mr-1`}>
                <i className="fa-solid fa-square"></i>
            </button>
            <button className={`${toolBoxStyle.whiteboardToolButton} ml-1 mr-1`}>
                <i className="fa-solid fa-diamond"></i>
            </button>
            <button className={`${toolBoxStyle.whiteboardToolButton} ml-1 mr-1`}>
                <i className="fa-solid fa-circle"></i>
            </button>
            <button className={`${toolBoxStyle.whiteboardToolButton} ml-1 mr-1`}>
                <i className="fa-solid fa-arrow-right"></i>
            </button>
            <button className={`${toolBoxStyle.whiteboardToolButton} ml-1 mr-1`}>
                <i className="fa-solid fa-grip-lines"></i>
            </button>
            <button className={`${toolBoxStyle.whiteboardToolButton} ml-1 mr-1`}>
                <i className="fa-solid fa-pencil"></i>
            </button>
            <button className={`${toolBoxStyle.whiteboardToolButton} ml-1 mr-1`}>
                <i className="fa-solid fa-font"></i>
            </button>
            <button className={`${toolBoxStyle.whiteboardToolButton} ml-1 mr-1`}>
                <i className="fa-solid fa-image"></i>
            </button>
            <button className={`${toolBoxStyle.whiteboardToolButton} ml-1`}>
                <i className="fa-solid fa-eraser"></i>
            </button>
        </div>
    )
}

export default ToolBox