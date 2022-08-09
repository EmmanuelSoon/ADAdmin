import React, { useState } from "react";
import "../imageStyle.css";

export default function Image(props) {

    const [isOpen, setIsOpen] = useState(false);

    let handleShowDialog = () => () => {
        setIsOpen(!isOpen);
    }

    return (
        <div>
            <img height={100} width={100} src= {props.image} onMouseOver = {handleShowDialog()} onMouseOut={handleShowDialog()} alt="missing"/>
            {isOpen && (
          <dialog className="dialog" style={{ position: "absolute" }} open onClick={handleShowDialog()}>
            <img className="image" src={props.image} alt="missing"/>
          </dialog>
        )}
        </div>
    );

}
