import NavLink from "./NavLink"
import { useState } from "react"
import close from '/assets/close.png';
import open from '/assets/open.png';

export default function DesktopNav() {
    
    const [isOpen, setIsOpen] = useState(false);
    
    window.addEventListener('resize', () => {
        if (isOpen) {
           if (window.innerWidth >= 750) {
               document.getElementById('root').style.gridTemplateColumns = '0% 100%'            
            } else {
               document.getElementById('root').style.gridTemplateColumns = '40% 60%'
            }
        } 

        if (!isOpen) {
            document.getElementById('root').style.gridTemplateColumns = '0% 100%'
        }
    })

    function hnadleSideMenu() {
        console.log(isOpen)
        if (isOpen) {
            document.getElementById('root').style.gridTemplateColumns = '0% 100%'            
        } else if (!isOpen) {
            document.getElementById('root').style.gridTemplateColumns = '40% 60%'
        } 

    document.querySelector('.mobile-nav').classList.toggle('hide');

    setIsOpen(prevValue => ! prevValue)
        
    }

    return (
        <nav className="desktop-nav" aria-label="navigation menu for desktop">
            <button onClick={hnadleSideMenu}
             className="open-menu-btn" aria-label="open mobile menu button">
                {isOpen ? <img src={close} alt="close menu button" /> : <img src={open} alt="open menu button" /> }
            </button>

            <ul className="desktop-nav--links">
                <NavLink text="history" link='#'/>
                <NavLink text="events" link='#'/>
                <NavLink text="collections" link='#'/>
            </ul>

            <h1 className="nav--title">terpsichore</h1>

            <ul className="desktop-nav--links">
              <NavLink text="exhibitions" link='#'/>
              <NavLink text="tickets" link='#'/>
              <NavLink text="contacts" link='#'/>
            </ul>
        </nav>
    )
}