
import './App.css';
import About from './components/about/About';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Services from './components/services/Services';
import Skill from './components/skill/Skill';

import "./App.css";
import About from "./components/about/About";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Projects from "./components/projects/Projects";
import Qualification from "./components/qualification/Qualification";
import Services from "./components/services/Services";
import Skill from "./components/skill/Skill";

function App() {
  return (
    <>
      <Header/>
      <main className='main'>
      <Home/>
      <About/>
      <Skill/>
      <Services/>
      </main>
    </>
  );
}

export default App;
