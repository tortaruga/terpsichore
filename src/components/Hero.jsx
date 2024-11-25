import video from '/assets/dancing-video.mp4';

export default function Hero() {
    return (
        <section className="hero">
            <video className="hero--video" muted loop autoPlay>
               <source src={video} />
            </video> 
             
            <div className="hero--text">
               <h1 className='hero--title'>
                Welcome to Terpsichore
               </h1>

               <p className='hero--p'>
                a museum outside space and time that collects the moments consciousness slips away while the body's enraptured in dance
               </p>

               <a className='hero--learn-more' href="#about">learn more</a>
            </div>
             
        </section>
    )
}