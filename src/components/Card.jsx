export default function Card(props) {
    // console.log('rendering cards!')
    return (
        <div className="card">
            <img src={props.img} className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title">{props.heading}</h5>
                <a href={props.link} className="btn btn-primary">Buy This Game!</a>
            </div>
        </div>      
    )
}

