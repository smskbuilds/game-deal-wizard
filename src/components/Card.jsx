export default function Card(props) {
    return (
        <div className="card">
            <img src={props.img} className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title">{props.heading}</h5>
                <a href="#" className="btn btn-primary">Buy This Game!</a>
            </div>
        </div>      
    )
}

