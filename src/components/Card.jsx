function Card(props){

    let status;
    if (props.experience.openSpots === 0){
        status = "Sold out"; 
    } else if (props.experience.location === "Online") { 
         status = "Online";
    } else {
        status = undefined;
    }

    return(
        <section className="experience-card">
            <div className="experience-img-wrapper">
                {status !== undefined && <span className="experience-status">{ status }</span>}
                <img src={`src/assets/img/${props.experience.coverImg}`} alt={props.experience.title} />
            </div>
            <div className="experience-data-wrapper">
                <span className="experience-rating">{props.experience.stats.rating}<span className="experience-rating-meta">({props.experience.stats.reviewCount}) · {props.experience.location}</span></span> 
                <h2 className="experience-name">{props.experience.title}</h2>
                <p className="experience-price"><span>From ${props.experience.price}</span>/ person</p>
            </div>
        </section>
    )
}

export default Card