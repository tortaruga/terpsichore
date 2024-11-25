export default function NavLink(props) {
    return (
        <li className="nav--link">
          <a href={props.link}>{props.text}</a>
        </li>
    )
}