// import React, { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
import "./Content.css";

const Content = (props) => {
    // useEffect(() => {
    //     AOS.init({duration:2000});
    //     AOS.refresh();
    //   }, []);
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