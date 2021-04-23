import React, { useState, useEffect}  from 'react';
import {Element, scrollSpy} from 'react-scroll'
import ReactPageScroller from 'react-page-scroller';
import Contect from './Contect';
import Header from '../components/Header';
import Main from './Main';
import Project from './Project';
import Skill from './Skill';


const pages = ['main', 'skill', 'project', 'contect'];

const Portfolio = () => {
    const [finProlog, setFinProlog] = useState(false);
    const [activePage, setActivePage] = useState("main");
    const [currentPage, setCurrentPage] = useState(0);

    useEffect(() => {
      scrollSpy.update();
    }, [currentPage]);

    const handlePageChange = number => {
      setCurrentPage(number);
      setActivePage(pages[number]);
    };
  
    
    const handleBeforePageChange = number => {
      console.log(number);
    };
    
    return (
        <div id='portfolio'>
          <Header finProlog={finProlog} setActivePage={setActivePage} handlePageChange={handlePageChange}/>
          <ReactPageScroller
          pageOnChange={handlePageChange}
          onBeforePageScroll={handleBeforePageChange}
          customPageNumber={currentPage}
          blockScrollDown={!finProlog}
        >
          <Element name='main' id='main'>
              <Main finProlog={finProlog} setFinProlog={setFinProlog} active={activePage === "main"}/>
            </Element>
            <Element name='skill' id='skill'><Skill active={activePage === "skill"} /></Element>
            <Element name='project' id='project'><Project active={activePage === "project"}/></Element>
            <Element name='contect'><Contect active={activePage === "contect"}/></Element>
         </ReactPageScroller>
      </div>
    )
}

export default Portfolio;