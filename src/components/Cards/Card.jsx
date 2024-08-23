export default function Card(props) {
    return (
        <div className="card">
            <img src={props.img} className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title">{props.heading}</h5>
                <div className="card-bottom-row">
                    <a href='#' className="btn btn-primary">Buy This Game!</a>
                    <div className="metacritic-button">
                        <div className="metacritic-score">{props.metacriticScore}</div>
                    </div>
                </div>
            </div>
        </div>      
    )
}

