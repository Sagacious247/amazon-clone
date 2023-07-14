import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
  return (
    <div className='home'>
      <div className="home_container">
        <img 
        className='home__image'
         src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
         alt="" />

         <div className="home__row">
            <Product
            id="263464854"
            title="The lean startup  Kenwood KMix Stand Mixer for Baking, Stylish Mixer with K-beater, Dough Hook
            and Whisk, 5 Litre Glass Bowl"
            price={64}
            image="https://m.media-amazon.com/images/I/51T-sMqSMiL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg"
            rating={5}
            />
            <Product
            id="4953235"
            title="Kenwood KMix Stand Mixer for Baking, Stylish Mixer with K-beater, Dough Hook
             and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            rating={3}
            image="https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/M/H/183412_1614467005.jpg"
            />
         </div>

         <div className="home__row">
         <Product
            id="324686887"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            image="https://m.media-amazon.com/images/I/81rus0UFhsL._AC_SX679_.jpg"
            />

            <Product
            id="2365467"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="data:image/jpeg;base64,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"
            />
           
            <Product
            id="43567858695"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.88}
            rating={4}
            image="data:image/jpeg;base64,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"
            />
         </div>

         <div className="home__row">
            <Product
            id="4345738584"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 * 1440"
            price={1094.98}
            rating={4}
            image="data:image/jpeg;base64,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"
            />

         </div>
      </div>
    </div>
  )
}

export default Home