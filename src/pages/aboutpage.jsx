import '../pagestyle/aboutpagestyle.css';
import '../pagestyle/global.css';

export default function AboutP() {
  return (
    <section className="section AboutS" id="About">
      <h1 className="Header">About</h1>
      <div className="flex">
        <img
          className="pfp"
          src="https://us-tuna-sounds-images.voicemod.net/8c3aa83c-b63a-4f4b-b287-1ddf7e5f0a4a-1734571669314.jpg"
          alt="Profile"
        />
        <div>
          <h1>Hi, My name is Chatchai Phanitsakunchai</h1>
          <p className="txtp">
            I'm currently studying at Chulalongkorn University in Thailand <br />
            More about me will be written here soon...
          </p>
        </div>
      </div>
    </section>
  );
}