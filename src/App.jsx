/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}*/
import Header from './components/header.jsx';
import Hero from './components/hero.jsx';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Homepage from './homepage.jsx';
import Home from './home.jsx';
import About from './components/about.jsx';
import Services from './components/services.jsx';
import Projects from './components/projects.jsx';
import Contact from './components/contact.jsx';
import Footer from './components/footer.jsx';
function App(){
  return(
    <>
    <Header></Header>
    <Hero></Hero>
    <About></About>
    <Services></Services>
    <Projects></Projects>
    <Contact></Contact>
    <Footer></Footer>
    </>
  );
}

export default App
