
import { useState } from "react";
import "./gamingskillstyle.css";
import DS3 from "./gaming/Darksoul3Port.jsx";
import LoL from "./gaming/lolPort.jsx";
export default function GamingSkill() {

  const [activeTab,setActiveTab] = useState(1);
  const totalTabs = 2;

  const handlePrev = () => {
    setActiveTab((prev) => (prev === 1 ? totalTabs : prev - 1));
  };
  const handleNext = () => {
  setActiveTab((prev) => (prev === totalTabs ? 1 : prev + 1));
  };
  
  return (

    <section className="gamingminipage">

      <div className="ArrowContainer">
        <button className="ArrowButton" onClick = {handlePrev}> <img class = "arrowicon" src = "/icon/prev.png" ></img>  </button>      
        <div>
          { activeTab === 1 && <LoL />}
          { activeTab === 2 && <DS3 />}
        </div>
        <button className="ArrowButton" onClick = {handleNext}> <img class = "arrowicon" src = "/icon/nxt2.png" ></img> </button>
      </div>

    </section>
  );
}