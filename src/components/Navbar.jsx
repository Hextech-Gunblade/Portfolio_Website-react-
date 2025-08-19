
import './Navbarstyle.css'
export default function Navbar() {
    return (
        <header className="l-header">
            <nav className = "nav">
                <div className='Nav_Menu'> 
                    <ul className='Nav_List'>Chatchai</ul> 
                </div>
                <div className='Nav_Menu'>
                    <ul className='Nav_List'>
                        <li className='Nav_Item'><a href='#Home'> Home </a></li>
                        <li className='Nav_Item'><a href='#About'> About </a></li>
                        <li className='Nav_Item'><a href='#Skill'> Skills </a></li>
                        <li className='Nav_Item'><a> Projects </a></li>
                        <li className='Nav_Item'><a> Contacts </a></li>
                    </ul>    
                </div>
            </nav>
        </header>
    )
}