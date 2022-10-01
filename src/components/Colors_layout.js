import React, { useContext, useEffect, useState } from 'react'
import ColorSelected from '../context'

function Colors_layout({ colors, colorText }) {

    const [className, setClassName] = useState('')
    const [classNameInner, setClassNameInner] = useState('inner-container')
    const [isSelected, setIsSelected] = useState('false')

    const {colors_selected, setColors_selected} = useContext(ColorSelected)

    useEffect(() => {
        if (className == 'outer-container') {
            setClassNameInner('inner-container-selected')
        }
        else {
            setClassNameInner('inner-container')
        }
    }, [className])

    useEffect(()=>{

        if(colors_selected.color != colors){
            setClassName('')
            setIsSelected(false)
        }
        
    },[colors_selected])

    return (
        <div>
            {/* <p>{JSON.stringify(colors_selected)}</p> */}

            <div style={{ borderColor: colors }} className={className} onClick={() => {
                if (className.length) {
                    setClassName('')
                    setIsSelected(false)

                } else {
                    setIsSelected(true)
                    setClassName('outer-container')
                    
                    setColors_selected({
                        color: colors,
                        colorText:colorText
                    })
                }
            }}>
                <div style={{ backgroundColor: colors }} className={classNameInner}>

                </div>
            </div>
            {isSelected == true && (
                <p style={{textAlign:'center', fontSize:'15px'}}>{colorText}</p>
            )            
            }
        </div>
    )
}

export default Colors_layout