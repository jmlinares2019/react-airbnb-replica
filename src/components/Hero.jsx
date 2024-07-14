import heroImg from '../assets/img/photo-grid.jpg'

function Hero(){
    return(
       <section className='hero'>
            <div className="img-wrapper">
                <img src={heroImg} className='hero-img'/>
            </div>
            <div className="row text-wrapper">
                <div className="col-9">
                    <h1 className="title">Online Experiences</h1>
                    <p className="description">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
                </div>
            </div>
       </section>  
    )
}

export default Hero