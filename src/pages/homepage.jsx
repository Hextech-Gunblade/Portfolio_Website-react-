import Dev_icon from '../assets/Dev_icon.png';
import Skill_icon from '../assets/Skill_icon.png';
import Github_icon from '../assets/Github_icon.png';
import '../pagestyle/homepagestyle.css';
import '../pagestyle/global.css';

export default function Homep() {
  return (
    <section className="section landing" id="Home">
      <div className="icons">
        <img src={Dev_icon} alt="Dev" className="icon" />
        <img src={Skill_icon} alt="Skill" className="icon" />
        <img src={Github_icon} alt="Github" className="icon" />
      </div>
      <h1 className="head1">Welcome To My</h1>
      <h2 className="head2">Portfolio Website</h2>
    </section>
  );
}