export default function CollectionCard(props) {
    return (
        <div className="collection-card">
            <img src={props.img} alt="random image" className="collection-img"/>
            <p className="collection-title">{props.title}</p>
            <p className="collection-date">{props.date}</p>
        </div>
    )
}