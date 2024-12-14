
import './styles.scss'
import React,{ lazy } from 'react';
import Header from './Components/Header';
const Intro = React.lazy(() => import('./Views/Intro'));
const Skills = React.lazy(() => import('./Views/Skills'));
const KeyModules = React.lazy(() => import('./Views/Key-Modules')); 
const Projects = React.lazy(() => import('./Views/Projects'));
const TeamComments=React.lazy(()=>import('./Views/Team-Comments'));
const Footer = lazy(()=>import ('./Views/Footer'))


function App() {
  return (
   <>
   {/* <Header/> */}
   <main> 
      <Intro/>
      <Skills/>
      <KeyModules/>
      <Projects/>
      <TeamComments/>
    </main> 
      <Footer/>
      </>
  );
}

export default App;
