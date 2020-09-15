import React from 'react'
import '../assets/styles/Components/Home.css'
import Product from '../Components/Product'

function Home() {

  return (
    <div className='home'>
      <div className="home__container">
        <img className='home__img' src="https://cdn.technadu.com/wp-content/uploads/2018/07/Amazon-Prime-Day-2018-Featured-Banner.jpg" alt=""/>

        <div className="home__row">
          <Product
          id='123311221'
          title='The Lean Startup: How Todays Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses'
          price={29.99}
          img='https://images-na.ssl-images-amazon.com/images/I/81jgCiNJPUL.jpg'
          rating={5} />
          <Product
          id='123311243'
          title='Kenwood kMix KMX750WH - Robot de cocina multifunción, 1000 W, bol metálico de 5 L con asa, gancho para amasar'
          price={298.99}
          img='https://images-na.ssl-images-amazon.com/images/I/51yd%2BTT6YuL._AC_SL1200_.jpg'
          rating={4} />
        </div>

        <div className="home__row">
        <Product
          id='123311244'
          title='Samsung Galaxy S10+ Factory Unlocked Android Cell Phone | US Version | 128GB of Storage'
          price={730.99}
          img='https://images-na.ssl-images-amazon.com/images/I/61bFHQAaoyL._AC_SL1500_.jpg'
          rating={4} />
        <Product
          id='123311245'
          title='Echo Dot (3rd Gen) bundle with Amazon Smart Plug - Sandstone'
          price={50.99}
          img='https://images-na.ssl-images-amazon.com/images/I/61-ZaqPxznL._AC_SL1000_.jpg'
          rating={4} />
        <Product
          id='123311246'
          title='New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)'
          price={599.99}
          img='https://images-na.ssl-images-amazon.com/images/I/81FH2j7EnJL._AC_SL1500_.jpg'
          rating={4} />
        </div>

        <div className="home__row">
        <Product
          id='123311247'
          title='Samsung 49-Inch CRG9 Curved Gaming Monitor (LC49RG90SSNXZA) – 120Hz Refresh, Ultrawide Screen QLED Computer Monitor, 5120 x 1440p Resolution, 4ms Response, FreeSync 2 with HDR, HDMI'
          price={1094.99}
          img='https://images-na.ssl-images-amazon.com/images/I/71916r38cNL._AC_SL1500_.jpg'
          rating={4} />
        </div>
      </div>
    </div>
  )
}

export default Home
