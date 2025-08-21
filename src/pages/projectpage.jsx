import '../pagestyle/projectpagestyle.css';
import '../pagestyle/global.css';
import Project1P from  './projectcontent/project1.jsx';
import { useState } from "react";

export default function ProjectP() {
    const [activeTab,setActiveTab] = useState(1);
      const totalTabs = 2;
    
      const handlePrev = () => {
        setActiveTab((prev) => (prev === 1 ? totalTabs : prev - 1));
      };
      const handleNext = () => {
      setActiveTab((prev) => (prev === totalTabs ? 1 : prev + 1));
      };
  return (
    <section className="sectionproject" id="Project">
        <h1 className='Header'>Projects</h1>
        <div className="ProjectContainer">

                <button className="ArrowButton" onClick = {handlePrev}> <img className = "arrowicon" src = "/icon/prev.png" ></img>  </button>      
                <div className = "ProjectContent">
                  { activeTab === 1 && <Project1P />}
                  { activeTab === 2 && <div>2</div>}
                </div>
                <button className="ArrowButton" onClick = {handleNext}> <img className = "arrowicon" src = "/icon/nxt2.png" ></img> </button>
        </div>
    </section>
  );
}