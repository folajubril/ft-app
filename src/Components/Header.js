import React from 'react'
import { ReactComponent as ArrowDown } from "../Assets/images/arrowDown.svg"
import { ReactComponent as Profile } from "../Assets/images/profile.svg"
import { ReactComponent as Search } from "../Assets/images/searchIcon.svg"
import { ReactComponent as CartImage } from "../Assets/images/cartImage.svg"
import '../style.css'
export default function Header() {
    return (
        <div className={'header'}>
            <div className={'left'}>
                <div className={'lang'}style={{display: 'inline-flex', margin: 'auto', justifyContent: 'center',}}>
                    <span style={{marginLeft: '10px'}} >EN </span> <ArrowDown style={{display: 'flex', margin: 'auto', width: '100%', paddingLeft: '.5rem'}} />
                </div>
                <div className={'lang'}style={{display: 'inline-flex',margin: 'auto', justifyContent: 'center',}}>
                    <span style={{marginLeft: '10px'}} >USD </span> <ArrowDown style={{display: 'flex', margin: 'auto', width: '100%', paddingLeft: '.5rem'}} />
                </div>
            </div>
            
            <div className={'right'} >
            <div className={'search header-item'} style={{marginRight: '1rem'}}>
                    <Search style={{width: '15px'}} />
                </div>
                <div className={'profile header-item'} style={{marginRight: '1rem'}}>
                    <Profile style={{maxWidth: '16px'}}/> <span style={{paddingLeft: '5px'}}> My Profile</span>
                </div>
                <div className={'cart header-item'} style={{marginRight: '1rem'}}>
                    <CartImage style={{maxWidth: '18px'}}/>  <span style={{paddingLeft: '5px'}}> Items</span>
                </div>
               
            </div>
        </div>
    )
}
