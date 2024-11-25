import exploreCardsData from "../exploreCardsData"
import ExploreCard from "./ExploreCard"

export default function ExploreSection() {
   const cardsElements = exploreCardsData.map(card => {
    return (
        <ExploreCard key={card.key}
        {...card} />
    )
   })

   return (
    <section className="explore">
      {cardsElements}
    </section>
   )
}