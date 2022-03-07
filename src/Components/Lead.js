import React from 'react'
import Typist from 'react-text-typist';
import { Parallax } from 'react-scroll-parallax';
import styled, { createGlobalStyle } from 'styled-components';
import ParallaxHeader from './ParallaxHeader'
import LeadImage from '../Assets/images/leadImage.jpeg';
import ProductImage from '../Assets/images/imageProduct.png';
import Card from './Card';
import '../style.css';
const StyledTypist = styled(Typist)`
  font-size: 4rem;
  color: cyan;
`;
const products= [
{name: 'Nike Air Max', price: '$100', image: `${ProductImage}`},
{name: 'FS - Nike Air Max 270 ', price: '$200', image: `${ProductImage}`},
{name: 'Yeezy foam runner', price: '$100', image: `${ProductImage}`},
]
export default function Lead() {
    return (
        <div className={'lead'}>
            <div className={"lead-container"}>
            <ParallaxHeader/>
                <div className={'text'}>
                    <StyledTypist sentences={['Step Up', 'Step Out ', 'Step In']} loop={true} />
                    <h2 style={{ fontSize: '4rem', color: 'white', fontWeight: '400' }}>With style</h2>
                </div>

            </div>
       
        </div>
    )
}
