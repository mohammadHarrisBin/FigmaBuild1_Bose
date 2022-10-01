import React from 'react'
import './ColorSection.css';
import Colors_layout from './Colors_layout';

function ColorSection() {
  
  return (
    <div className='selection-container'>
        <p>Select your color:</p>
        {/* colors */}
        <div className='colors-container'>


        <Colors_layout colors={'#666666'} colorText={'silver'}/>
        <Colors_layout colors={'#FEB554'} colorText={'yellow'}/>
        <Colors_layout colors={'#606651'} colorText={'green'}/>
        <Colors_layout colors={'#EDAB7B'} colorText={'peach'}/>
        <Colors_layout colors={'#C56A72'} colorText={'red'}/>


        </div>

        
    </div>
  )
}

export default ColorSection