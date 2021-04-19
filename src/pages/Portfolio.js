import React, { useState } from 'react';
import Scroll, {Element} from 'react-scroll'
import Contect from '../components/Contect';
import Header from '../components/Header';
import Main from '../components/Main';
import Project from '../components/Project';
import Skill from '../components/Skill';

const Portfolio = () => {
    const [finProlog, setFinProlog] = useState(false);

    return (
        <>
        <Header finProlog={finProlog}/>
        <Main finProlog={finProlog} setFinProlog={setFinProlog}/>
        {finProlog && <Element name='skill'><Skill /></Element>}
        {finProlog && <Element name='project'><Project/></Element>}
        {finProlog && <Element name='contect'><Contect /></Element>}
      </>
    )
}

export default Portfolio;