import React from 'react'
import { Typography } from 'antd';

import Logo from '../Assets/images/testLogo.png'
import '../style.css'

const { Title } = Typography;

function MultiDropdown() {
    return (
        <div className={'multi-dropdown'}>
            <img src={Logo} alt="Logo" style={{ height:'44px' }} />
            <div className={'dropdown-items'}>

                <Title level={5} style={{ color: '#40BFFF' }}> HOME</Title>
                <Title level={5}> MEN </Title>
                <Title level={5}> WOMEN</Title>
                <Title level={5}>KIDS</Title>
                <Title level={5}> ACCESORIES</Title>
            </div>
        </div>
    )

}


export default MultiDropdown;