import React from 'react';

import './App.css';
import Card from './component/Card';
import SideNav from './component/SideNav';
import Header from './component/Header';

function App() {
  return (
    <div className='grid App'>
      <Header></Header>
      <SideNav></SideNav>
      <div className="content">
        <h4>Ingenieros informáticos y cazadores en Monster Hunter</h4>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus condimentum eget leo in vehicula. Pellentesque molestie velit et mauris semper, sed convallis augue ullamcorper. Integer porttitor tellus vitae lectus commodo ornare. Morbi non dui purus. Mauris non dolor dui. Cras sodales ligula est, id feugiat lacus accumsan congue. Ut sapien urna, scelerisque at efficitur tempus, fermentum mattis leo.
        </p>
      </div>
    </div>
    
  );
  {/* <div className='App'>
      <header className='header'>
        <div>X</div>
        <div>
          <button>x</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <button>42</button>
        </div>
      </header>
      <nav>
        ola
      </nav>
    </div> */}
}

export default App;
