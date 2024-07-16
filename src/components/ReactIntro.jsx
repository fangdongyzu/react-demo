import React from 'react'

function ReactIntro() {
  return (
    <div style={{display:'flex', alignItems:'center', justifyContent:'space-around'}}>
        <div className='image-container'>
            <img src='/images/react-icon.png'></img>
        </div>
        <div className='content-container'>
            <p>&bull; Developed and maintained by Facebook</p>
            <p>&bull; Released in 2013</p>
        </div>
    </div>
  )
}

export default ReactIntro