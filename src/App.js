import ColorSelected from './context';
import './App.css';
import ColorSection from './components/ColorSection';
import Header from './components/Header';
import { useState } from 'react';

function App() {
  
  const [colors_selected, setColors_selected] = useState({
    color: '#666666',
    colorText:'silver'
  })
  
  return (
    <ColorSelected.Provider value={{colors_selected, setColors_selected}}>
    <div className="App" >
     
     {/* header */}
     <Header/>

     {/* body container */}
     <div className='body-container'>
     
          {/* left container */}
          <div className='left-container'>
            <p>QuietComfort 35<br/>Wireless<br/>headphones II</p>
            
            <div style={{paddingTop:'20px'}}>
              <ColorSection/>
            </div>

            {/* price section and button */}
            <div className='price-container'>
              <p>$229</p>
              <button>BUY NOW</button>
            </div>
          
          </div>

          {/* right container */}
          <div className='right-container'>
              <img 
              style={{
                position:'absolute',
                zIndex:0,
                right:0,
              }}
              src={require('./assets/curvey_bg.png')}/>

              <img 
              style={{
                position:'absolute',
                zIndex:-1,
                right:0,
                top:0,
              }}
              src={require('./assets/side_bg.png')}/>

              <img
              style={{
                zIndex:1,
              }}
              src={
                
                colors_selected.colorText == 'silver' ?

                require('./assets/headphones_silver.png') : (
                  
                require('./assets/soon.png')     )
              
              } 
              
                
                width={'400'}/>
          </div>
     </div>
    </div>
    </ColorSelected.Provider>

  );
}

export default App;
