function Card(props){

    let status;
    if (props.available === 0){
        status = "Sold out"; 
    } else if (props.location === "Online") { 
         status = "Online";
    } else {
        status = undefined;
    }

    return(
        <section className="experience-card">
            <div className="experience-img-wrapper">
                {status !== undefined && <span className="experience-status">{ status }</span>}
                <img src={`src/assets/img/${props.img}`} alt={props.title} />
            </div>
            <div className="experience-data-wrapper">
                <span className="experience-rating">{props.rating}<span className="experience-rating-meta">({props.reviews}) · {props.location}</span></span> 
                <h2 className="experience-name">{props.title}</h2>
                <p className="experience-price"><span>From ${props.price}</span>/ person</p>
            </div>
        </section>
    )
}

export default Card