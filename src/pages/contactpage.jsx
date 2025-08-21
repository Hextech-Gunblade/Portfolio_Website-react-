import '../pagestyle/contactpagestyle.css';
import '../pagestyle/global.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';
export default function Contactp() {
  return (
    <section className="sectioncontact" id="Contact">
 
        <h1 className='Headercontact'> Contacts </h1>
        <section className="buttonsection" >

            <ul className='socialsbuttons'>
                <li>
                    <a href = "https://web.facebook.com/mistercreepper.mistercreepper/" target='_blank'>
                        <FontAwesomeIcon className='fab' icon={faFacebookF} />
                        <span>Facebook</span>
                    </a>
                </li>
                <li>
                    <a href = "https://github.com/Hextech-Gunblade" target='_blank'>
                        <FontAwesomeIcon className='fab' icon={faGithub} />
                        <span>Github</span>
                    </a>
                </li>
                <li>
                    <a href = "https://www.instagram.com/chatchai_phanitsakunchai/" target='_blank'>
                        <FontAwesomeIcon className='fab' icon={faInstagram} />
                        <span>Instagram</span>
                    </a>
                </li>
                <li>
                    <a href = "https://discordapp.com/users/561430446764720139" target='_blank'>
                        <FontAwesomeIcon className='fab' icon={faDiscord} />
                        <span>Discord</span>
                    </a>
                </li>
            </ul>
        </section>
    </section>
  );
}