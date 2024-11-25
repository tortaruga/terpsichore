import DesktopNav from "./DesktopNav.jsx"
import Hero from "./Hero.jsx"
import ExploreSection from "./ExploreSection.jsx"
import About from "./About.jsx"
import Collections from "./Collections.jsx"
import Footer from "./Footer.jsx"

export default function Main() {
    return (
        <main>
            <DesktopNav />
            <Hero />
            <ExploreSection />
            <About />
            <Collections />
            <Footer />
        </main>
    )
}