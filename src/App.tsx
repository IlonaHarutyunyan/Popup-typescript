import React, { useState } from 'react';
//style
import './App.css';
//components
import Popup from './Components/Popup';
import OpenContext from './Components/Context';

const App: React.FC = () => {
  const [show, setShow] = useState<boolean>(false)

  const showPopup = () => {
    setShow (!show)
  }
   return (
     <OpenContext.Provider value = {{show,setShow}}>
       <div className = 'page-wrapper'>
          {show && 
            <div className = 'popup-page-wrapper'>
              <Popup onBackdropClick = {showPopup} isVisible = {show}/>
            </div>
          }
          <button onClick = {showPopup} className = 'button'>click</button>
        </div>
     </OpenContext.Provider>
     
   )
}

export default App;