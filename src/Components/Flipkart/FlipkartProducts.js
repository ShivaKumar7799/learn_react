import React from 'react'
import './FlipkartStyles.css'
// import {firstImage} from 'Images/first.jpg'

function FlipkartProducts(props) {
    const offerPrice = props.price;
    const originalPrice = props.offer;
    const offerPercentage = Math.floor((100 -((offerPrice/originalPrice)*100)));
  return (
    <div className='flipkartContainer' >
        <div className='imageContainer' > 
            <img src={props.mobileImage} alt='first' />
            <div>
                <input type="checkbox" />
                <span> Add to Compare</span> 
            </div>
        </div>
        <div className='descriptionContainer' >
            <h2>{props.mobileName}</h2>
            <div className='ratings' >
                <button > 4.3  &#9733; </button>
                <span> 38493 Ratings & 3434 Reviews </span>
            </div>
            <ul class="_1xgFaf">
                <li class="rgWa7D"> {props.ramSize} GB RAM | 128 GB ROM | Expandable Upto 1 TB</li>
                <li class="rgWa7D">16.76 cm (6.6 inch) Full HD+ Display</li>
                <li class="rgWa7D">50MP + 8MP + 2MP | 8MP Front Camera</li>
                <li class="rgWa7D">5000 mAh Lithium Ion Battery</li>
                <li class="rgWa7D">Qualcomm Snapdragon 750G Processor</li>
                <li class="rgWa7D">1 Year Warranty Provided by the Manufacturer from Date of Purchase</li>
            </ul>
        </div>
        <div className='priceContainer' >
            <div className='priceLeftContent' >
                <h2> ${props.price} </h2>
                <p> <del>${props.offer}</del> <span className='percentageOffer' >{offerPercentage}% off</span> </p>
                <p className='deliveryType' >Free Delivery</p>
                <h5 className='discountType' >Top Discount on Sale</h5>
                <p> Upto $8950 Off on Exchange</p>
            </div>
            <div className='flipkartLogo' >
                <img src='https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png' alt ='flipkartLogo' />
            </div>
        </div>
    </div>
  )
}

export default FlipkartProducts