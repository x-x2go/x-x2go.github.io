import React, { useState}  from 'react';
import ReactPageScroller from 'react-page-scroller';
import Contect from './Contect';
import Header from '../components/Header';
import Main from './Main';
import Project from './Project';
import Skill from './Skill';
import Footer from '../components/Footer';


const pages = ['main', 'skill', 'project', 'contect'];

const Portfolio = () => {
    const [finProlog, setFinProlog] = useState(false);
    const [activePage, setActivePage] = useState("main");
    const [currentPage, setCurrentPage] = useState(0);

    const handlePageChange = number => {
      setCurrentPage(number);
      setActivePage(pages[number]);
    };
  
    
    return (
        <div id='portfolio'>
          <Header finProlog={finProlog} activePage={activePage} handlePageChange={handlePageChange}/>
          <ReactPageScroller
          pageOnChange={handlePageChange}
          customPageNumber={currentPage}
          blockScrollDown={!finProlog}
        >
            <Main finProlog={finProlog} setFinProlog={setFinProlog} active={activePage === "main"}/>
            <Skill active={activePage === "skill"} />
            <Project active={activePage === "project"}/>
            <Contect active={activePage === "contect"}/>
         </ReactPageScroller>
         { finProlog && <Footer currentPage={currentPage} handlePageChange={handlePageChange}/>}
      </div>
    )
}

export default Portfolio;