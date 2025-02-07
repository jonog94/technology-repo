import React from 'react'

interface BottomLayoutProps {
    children?: React.ReactNode;
}

const BottomLayout: React.FC<BottomLayoutProps> = (props) => {
    return (
        <div>
            {props.children}
        </div>
    )
}

export default BottomLayout