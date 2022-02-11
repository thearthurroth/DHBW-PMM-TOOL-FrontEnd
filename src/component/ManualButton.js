import React from 'react'
import './ManualButton.css'
import Pdf from '../Use_case_diagram.pdf';

const ManualButton = () => {
    function manual_onclick(){
        window.open(Pdf, "_blank");
    } 
  
    return (
    <button onClick={manual_onclick} type='button'>User manual</button>
  )
}

export default ManualButton