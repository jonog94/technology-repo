import React from 'react'
import paletteStyle from '@src/styles/whiteboard/palette/Pallete.module.css'

const Palette: React.FC  = () => {
    return (
        <div>
            <div>
                <span className={paletteStyle.label}>Stroke</span>
            </div>
            <div className={paletteStyle.colors}>
                <div className={paletteStyle.colorRange}>
                    <div className={`${paletteStyle.black} ${paletteStyle.colorBlock}`}></div>
                    <div className={`${paletteStyle.red} ${paletteStyle.colorBlock}`}></div>
                    <div className={`${paletteStyle.green} ${paletteStyle.colorBlock}`}></div>
                    <div className={`${paletteStyle.blue} ${paletteStyle.colorBlock}`}></div>
                    <div className={`${paletteStyle.orange} ${paletteStyle.colorBlock}`}></div>
                </div>
                <div>
                    <div className={paletteStyle.colorPicker}></div>
                </div>
            </div>
        </div>
    )
}

export default Palette