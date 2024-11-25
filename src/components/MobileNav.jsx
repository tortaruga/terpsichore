import NavLink from "./NavLink"

export default function MobileNav() {
    return (
        <nav className="mobile-nav hide" aria-label="navigation menu for mobile">
              <ul className="mobile-nav--links">
                <NavLink text="our history" link='#'/>
                <NavLink text="exhibitions" link='#'/>
                <NavLink text="collections" link='#'/>
                <NavLink text="tickets" link='#'/>
                <NavLink text="events" link='#'/>
                <NavLink text="contacts" link='#'/>
              </ul>
        </nav>
    )
}