import collectionsData from "../collectionsData"
import CollectionCard from "./CollectionCard"

export default function Collections() {
    const cards = collectionsData.map(card => {
        return (
            <CollectionCard key={card.key} 
            {...card} />
        )
    })

    return (
        <section className="collections">
         <h1 className="collections-h1">Collections</h1>
         
         <div className="collection-grid">
           {cards}
         </div>
        </section>
    )
}