import React from "react";
import photo from "./jindu.jpg";
import 'tachyons';

function profile () {
    return(
        <info>
        <img src={photo} alt="jindu" className="ba b--black-20 mw5 center" />
        <h2 className="name">Jindu Dimuna</h2>
        <h3 className="roles">Frontend Developer, Creative Director</h3>
        <h3 className="contact">danieldimuna@gmail.com</h3>
        <div className="ph3">
        <a class="f6 grow no-underline br-pill ph6 pv2 mb3 dib white bg-dark-blue" href="mailto:danieldimuna@gmail.com">Email</a>
        </div>
        </info>

    )
}









export default profile;