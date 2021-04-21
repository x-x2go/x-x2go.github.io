import React, { useState } from 'react';
import {Element} from 'react-scroll'
import Contect from './Contect';
import Header from '../components/Header';
import Main from './Main';
import Project from './Project';
import Skill from './Skill';


const Portfolio = () => {
    const [finProlog, setFinProlog] = useState(false);
    const [activePage, setActivePage] = useState("main");
  

    return (
        <>
        <Header finProlog={finProlog} setActivePage={setActivePage}/>
        <Element name='main'><Main finProlog={finProlog} setFinProlog={setFinProlog} active={activePage === "main"}/></Element>
        {finProlog && <Element name='skill'><Skill active={activePage === "skill"}/></Element>}
        {finProlog && <Element name='project'><Project active={activePage === "project"}/></Element>}
        {finProlog && <Element name='contect'><Contect active={activePage === "contect"}/></Element>}
      </>
    )
}

export default Portfolio;