import React from "react";
import "./ImageCard.css";




const ImageCard = props => {
    const Clicked = () => {
        if (props.click === true) {
            console.log("Already true");
        }
    }

    return (
        <div className="game-image" onClick={Clicked()}>
            <div className="card">
                <div className="card-image">
                    <figure className="image is-128x128">
                        <img src={props.image} alt="orange" />
                    </figure>
                </div>
            </div>
        </div>
    );
}
export default ImageCard;