import { useState } from "react";

import "../pagestyle/skillpagestyle.css";
import '../pagestyle/global.css';

import TechSkill from "./skillminor/techskill.jsx";
import CoopSkill from "./skillminor/cooperativeskill.jsx";
import GamingSkill from "./skillminor/gamingskill.jsx";

export default function SimpleTabs() {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <section className="section" id = "Skill">
      {/* ปุ่มกดเปลี่ยน tab */}
      <h1 className="Header"> Skills </h1>
      <section className="BelowHeader">
        <div className = "Navcontainer">
          <button className = "skillbutton" onClick={() => setActiveTab(1)}>Tech Stack</button>
          <button className = "skillbutton" onClick={() => setActiveTab(2)}>CO-OP</button>
          <button className = "skillbutton" onClick={() => setActiveTab(3)}>Gaming</button>
        </div>

        {/* เนื้อหา */}
        <div className = "SkillContent">
          {activeTab === 1 && <TechSkill />}
          {activeTab === 2 && <CoopSkill />}
          {activeTab === 3 && <GamingSkill />}
        </div>
      </section>
    </section>
  );
}