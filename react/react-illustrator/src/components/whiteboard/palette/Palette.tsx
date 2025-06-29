import React from 'react'
import paletteStyle from '@src/styles/whiteboard/palette/Palette.module.css'

const Palette: React.FC  = () => {
    return (
        <div className={paletteStyle.palette}>
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
            <div>
                <div>
                    <span className={paletteStyle.label}>Background</span>
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
            <div>
                <div>
                    <span className={paletteStyle.label}>Stroke Width</span>
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
            <div>
                <div>
                    <span className={paletteStyle.label}>Stroke Style</span>
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
            <div>
                <div>
                    <span className={paletteStyle.label}>Edges</span>
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
            <div>
                <div>
                    <span className={paletteStyle.label}>Opacity</span>
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
            <div>
                <div>
                    <span className={paletteStyle.label}>Layers</span>
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
        </div>
    )
}

export default Palette