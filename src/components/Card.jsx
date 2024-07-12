export default function Card(props) {
    return (
        <div className="card">
            <img src={props.img} className="card-img-top" alt="box cover image for the game Celeste" />
            <div className="card-body">
                <h5 className="card-title">{props.heading}</h5>
                <p className="card-text">{props.description}</p>
                <a href="#" className="btn btn-primary">Buy This Game!</a>
            </div>
        </div>      
    )
}

