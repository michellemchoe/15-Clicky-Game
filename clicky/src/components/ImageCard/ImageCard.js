import React from "react";
import "./ImageCard.css";

const ImageCard = props => (
    <div className="game-image">
        <div class="card">
            <div class="card-image">
                <figure class="image is-128x128">
                    <img src={props.image} alt="orange" />
                </figure>
            </div>
        </div>
    </div>
);
export default ImageCard;