import {React} from "react";
// import {useRoutes} from "react-router-dom";
// import axios from "axios";
import cactus from "./assets/cactus_img.jpg";
import './minimalblogcard.css';

function minimalblogcard() {
    return (
        <article className="card">
            <img className="cactus_image" src={cactus} alt="cactus_image"></img>
            <div className="container">
                <span className="card-label"><b>Design</b></span>
                <h1 className="card-title">Embracing Minimalism</h1>
                <p className="card-description">From minimalist sculptures to minimalist paintings, this blog will 
                inspire you to appreciate the beauty that lies in simplicity.</p>
            </div>
            <div className="author">Annie Spratt</div>
        </article>
    );
}

export default minimalblogcard;