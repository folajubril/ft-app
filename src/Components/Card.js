import React from 'react'

export default function Card(name, price, image) {
    return (
        <div className={'card'} style={{ backgroundImage: `${image}` }}>
            <div className={'card-top'}>
                <div className={'name'}>
                    <p> {name}
                        FS - Nike Air Max 270</p>
                </div>
                <div className={'price'}>
                    <p>{price}
                        $299,43</p>
                </div>
            </div>
        </div>
    )
}
