import React from 'react'
import './ManualButton.css'
import Pdf from '../Use_case_diagram.pdf';

// Knopf, der auf Login Funktion zum Aufruf  des Benutzerhandbuchs entscheidend ist
const ManualButton = () => {
    // Funktion, die aufgerufen wird, falls der Knopf gedrückt wird
    function manual_onclick(){
      // Öffnen des neuen Fensters mit der zuvor importierten Datei 
      window.open(Pdf, "_blank");
    } 
  
    return (
    // Erstellen des benötigten Buttons
    <button onClick={manual_onclick} type='button'>User manual</button>
  )
}

export default ManualButton