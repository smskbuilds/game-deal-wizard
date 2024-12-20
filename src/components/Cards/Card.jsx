export default function Card(props) {
    return (
        <div className='card'>
            <img src={props.img} className='card-img-top' />
            <div className='card-body'>
                <h5 className='card-title'>{props.heading}</h5>
                <div className='card-bottom-row'>
                    <a
                        href={`https://www.metacritic.com/game/${props.slug}`}
                        className='btn btn-primary'
                        target='_blank'>
                        Game Info!
                    </a>
                    <a
                        href={`https://www.metacritic.com/game/${props.slug}`}
                        className='metacritic-button'>
                        <div className='metacritic-score'>
                            {props.metacriticScore}
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}
