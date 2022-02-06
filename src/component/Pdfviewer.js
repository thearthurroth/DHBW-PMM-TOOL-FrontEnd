import react from 'react'
import file from "../Use case diagram.pdf";


const Pdfviewer = ()=>{
    return(
    <div>
        <iframe
            style={{ width: "563px", height: "666px" }}
            src={file}
            type='application/pdf'
            title='title'
        />
    </div>)}
    export default Pdfviewer