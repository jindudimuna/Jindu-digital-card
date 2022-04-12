import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faTwitter, faInstagram} from "@fortawesome/free-brands-svg-icons";


function foot() {
    return(
        <div className='social-container'>
      <a href="https://github.com/jindudimuna"
        className="GitHUb">
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>

      <a href="https://twitter.com/live_syc"
        className="Twitter">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
    
        
      <a href="https://www.instagram.com/livesyc/"
        className="Instagram">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
</div>

    )
}

export default foot; 