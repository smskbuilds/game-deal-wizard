import celeste from '../assets/celeste.png'

export default function Card() {
    return (
        <div className="card">
            <img src={celeste} className="card-img-top" alt="box cover image for the game Celeste" />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>      
    )
}

