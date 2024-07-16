import React from 'react'

function ComponentBased() {
  return (
    <div style={{display:'flex', alignItems:'center', justifyContent:'space-around'}}>
        <div  className='image-container'>
            <img style={{height:'300px', width:'300px'}} src='/src/images/html-layout.png'></img>
        </div>
        <div className='content-container'>
            <p>Vanilla Webpage vs React Webpage</p>
            <p><strong>Vanilla Webpage</strong></p>
            <p>&bull; Put all HTML in <strong>index.html </strong>file</p>
            <p>&bull; <strong>Hard</strong> to debug and maitain</p>
            <p><strong>React Webpage</strong></p>
            <p>&bull; Put components in <strong>separate </strong> files</p>
            <p>&bull; <strong>Easy</strong>  to debug and maintain</p>
        </div>
    </div>
  )
}

export default ComponentBased