import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import HeaderDesktop from './components/HeaderDesktop';

function App() {
  const [screenSize, setScreenSize] = useState(window.innerWidth)

  const changeSize=()=> {
    setScreenSize(window.innerWidth)
  }
  window.addEventListener('resize', changeSize)
  useEffect(()=>{
    window.addEventListener('resize', changeSize)
    changeSize()
  },[])
  return (
    <div className="App overflow-hidden">
     {screenSize>768?<HeaderDesktop/>:<Header/>}
    </div>
  );
}

export default App;
