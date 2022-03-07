import React,{useState} from 'react'
import { ReactComponent as Delivery } from '../Assets/images/delivery.svg';
import { ReactComponent as Box } from '../Assets/images/box.svg';
import { ReactComponent as BusinessShop } from '../Assets/images/businessShop.svg';
import { ReactComponent as SteppingUp } from '../Assets/images/steppingUp.svg';
import { ReactComponent as Branding } from '../Assets/images/branding.svg';

import '../style.css'

const services = [
    { id: '1', name: 'Delivery', header: 'lorem ipsum dolor sit amet, consectetur adipiscing', svg: <Delivery style={{height: '100px'}}/>, body: 'lorem ipsum dolor sit amet, consectetur adipiscing boddddy' },
    { id: '2', name: 'Branding', header: 'lorem ipsum dolor sit amet, consectetur adipiscing', svg: <Branding style={{height: '100px'}}/> , body: 'lorem ipsum dolor sit amet, consectetur adipiscing boddddy' },
    { id: '3', name: 'Packaging', header: 'lorem ipsum dolor sit amet, consectetur adipiscing', svg: <Box style={{height: '70px'}}/>, body: 'lorem ipsum dolor sit amet, consectetur adipiscing boddddy'  },
    { id: '4', name: 'Suppliers', header: 'lorem ipsum dolor sit amet, consectetur adipiscing', svg: <SteppingUp style={{height: '70px'}}/>, body: 'lorem ipsum dolor sit amet, consectetur adipiscing boddddy'  },
    { id: '5', name: 'Sell online', header: 'lorem ipsum dolor sit amet, consectetur adipiscing', svg: <BusinessShop style={{height: '70px'}}/>, body: 'lorem ipsum dolor sit amet, consectetur adipiscing boddddy' },
]
function Cards() {
    const [openService, setOpenService] = useState(false);

    const handleOpenService = (name) => {

    }
    return (
        <>
            {services.map((service, index) => {
                return (
                    <div key={index} style={{ width: '50vw', height: '7rem', borderRadius: '.7rem', border: '1px solid darkorchid', padding: '2rem', margin: '1rem' }} >
                        <div style={{ display: 'grid', gridTemplateColumns: "65% 35%", justifyItems: 'center'}}>

                            <div>
                                <div className="card-header">
                                    <h3>{service.name}</h3>
                                </div>
                                <div className="card-body">
                                    <p>{service.body}</p>
                                </div>
                            </div>
                            <div className={'svg'} >
                                {service.svg}
                            </div>
                        </div>
                    </div>
                )

            })}
        </>
    )

}
export default function Services() {
    return (
        <div className="services-container">
            <h3>What we Offer now</h3>
            <Cards />
            <h3>What's coming</h3>

        </div>
    )
}
