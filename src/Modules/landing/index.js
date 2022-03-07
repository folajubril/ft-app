import React from 'react'
import { Parallax } from 'react-scroll-parallax';
// import Header from '../../Components/Header'
// import MultiDropdown from '../../Components/MultiDropdown'
import Lead from '../../Components/Lead'
import { Divider } from 'antd';
import '../../style.css'

export default function Landing() {
    return (
        <div className={'container'}>
            {/* <div className={'top'}>
                <Header />
                <MultiDropdown />
            </div>
            <Divider /> */}
            <Lead />
        </div>
    )
}

