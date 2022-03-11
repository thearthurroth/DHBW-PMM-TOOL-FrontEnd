import React from 'react'

export default function Title({title, subTitle}) {
  return (
    <div className="title__container">
        <div className="title">
            <h2>{title}</h2>  
        </div>
        <h4>{subTitle}</h4>          
    
    </div>
  )
}
