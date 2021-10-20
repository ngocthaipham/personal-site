
import "./Content.css";

const Content = (props) => {
    return (
        <>
        <p className="tag" style={{opacity: 1, transform: "translate(0px,0px)"}}>{props.tag}</p>
        <h3 className="description">{props.description}</h3>
        <div className="seperator-line"></div>
        <div className="content">{props.content}</div>
        </>
    )
}
export default Content ;