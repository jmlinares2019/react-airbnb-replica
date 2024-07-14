import cardPicture from '../assets/img/katie-zaferes.jpg'

function Card(){
    return(
        <section className="experience-card">
            <div className="experience-img-wrapper">
                <span className="experience-status">SOLD OUT</span>
                <img src={cardPicture} alt="Katie Zaferes" />
            </div>
            <div className="experience-data-wrapper">
                <span className="experience-rating">5.0<span className="experience-rating-meta">(6) · USA</span></span> 
                <h2 className="experience-name">Life lessons with Katie Zaferes</h2>
                <p className="experience-price"><span>From $136</span>/ person</p>
            </div>
        </section>
    )
}

export default Card