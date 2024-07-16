import React from 'react'

function ReactFeatures() {
  return (
    <div style={{display:'flex', alignItems:'center', justifyContent:'space-around'}}>
        <div className='image-container'>
            <img src='/src/images/react-feature.jpeg'></img>
        </div>
        <div className='content-container'>
            <p>&bull; Component-Based Architecture</p>
            <p>&bull; Virtual DOM (Document Object Model)</p>
            <p>&bull; Props</p>
            <p>&bull; useState</p>
            <p>&bull; useEffect</p>
        </div>
    </div>
  )
}

export default ReactFeatures