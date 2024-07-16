import React from 'react';
import BlueComponent from './components/BlueComponent';
import GreenComponent from './components/GreenComponent';
import RedComponent from './components/RedComponent';
import Greeting from './components/Greeting';
import Counter from './components/Counter';
import Timer from './components/Timer';
import ReactIntro from './components/ReactIntro';
import './App.css'; // Import the CSS file
import ReactFeatures from './components/ReactFeatures';
import ComponentBased from './components/ComponentBased';
const names = ['Alice', 'Bob', 'Charlie', 'David'];

const App = () => {
  return (
    <div>
      <div className='demo-part'>
        <h1>React Introduction</h1>
        <ReactIntro />
      </div>

      <div className='demo-part'>
        <h1>React Features</h1>
        <ReactFeatures />
      </div>

      <div className='demo-part'>
        <h1>Component Based Architecture</h1>
        <ComponentBased />
      </div>

      <div className='demo-part'>
        <h1>React Composable Components Demo</h1>
        <BlueComponent />
        <GreenComponent />
        <RedComponent />
      </div>

      <div className='demo-part'>
        <h1>Props Demo</h1>
        <Greeting name="Alice" />
        <Greeting name="Bob" />
      </div>


      <div className='demo-part'>
        <h1>Map Demo</h1>
        <div>
          {names.map((name, index) => (
            <Greeting key={index} name={name} />
          ))}
        </div>
      </div>

      <div className='demo-part'>
        <h1>useState Demo</h1>
        <Counter />
      </div>

      <div className='demo-part'>
        <h1>useEffect Demo</h1>
        <Timer />
      </div>
      <h1 style={{ textAlign: 'center', margin: '50px' }}>Thank you for your time!</h1>

    </div>
  );
}

export default App;
