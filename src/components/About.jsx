import hero from '/assets/hero.jpg'

export default function About() {
    return (
        <section id='about' className="about">
            <div className="about--text">
                <h1 className="about--title">Welcome</h1>
                <p className="about--p">All we want is to lose ourselves.
We are the keepers of those soul-fragments that glint in the fleeting moments we succeed—the heart-wrenching beauty that makes us crumble on our knees, the unrestrainable joy that drums in our feet, the desire to cry when someone seems to glide, soft as a feather, on the wind of another world.
Enjoy your stay.</p>
            </div>

            <img src={hero} alt="image of a man dancing" className="about--img" />
        </section>
    )
}