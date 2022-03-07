import React,{useState, useEffect} from 'react'
import { Button } from 'antd';
import {Parallax} from 'react-scroll-parallax'
import Logo from '../Assets/images/testLogo.png'
import '../style.css'

export default function ParallaxHeader() {
    const [animateHeader, setAnimateHeader] = useState(false);
    useEffect(() => {
        const listener = () => {
          if (window.scrollY > 140) {
            setAnimateHeader(true);
          } else setAnimateHeader(false);
        };
        window.addEventListener("scroll", listener);
    
        return () => {
          window.removeEventListener("scroll", listener);
        };
      }, []);
    return (
        <div className={`parallax-header ${animateHeader && "parallax-header--animated"}`}>
            <div className="logo" >
            <img src={Logo} alt="Logo" style={{ height:'44px', cursor: 'pointer'}} />
            </div>
            <div className="links">
                <button className="action-button">Join our Beta</button>
            </div>
        </div>
    )
}
