import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
export default function SociaLinks() {
  return (
    <div className="links-container">

<p className="social-container">
<a
          href="https://www.youtube.com/c/footies_ng"
          className="youtube social"
        >
          <FontAwesomeIcon icon={faYoutube} size="2x" />
        </a>
        <a
          href="https://www.facebook.com/footiesNG/"
          className="facebook social"
        >
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        <a
          href="http://www.instagram.com/Footies_NG"
          className="instagram social"
        >
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
        <a href="https://wwww.twitter.com/Footies_NG" className="twitter social">
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
        </p>
        </div>
  )
}
