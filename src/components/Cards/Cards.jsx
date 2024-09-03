import Card from './Card'

export default function Cards({gamesArray}) {
  
    // Given an array of game objects, map over the array & create card components from each game.

    const cardsDisplayed=gamesArray.map((card) =>
        <Card 
            key={card.rawg_id}
            heading={card.game_name}
            img={card.background_image}
            metacriticScore={card.metacritic}
        />
    )

    return (
        <div className = 'card--container'>
            {cardsDisplayed}
        </div>
    )
}