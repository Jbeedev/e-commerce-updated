import React, { useState } from 'react'
import OrderImg from '../assets/Images/Printing-Services.png'
import OrderLoggedIn from './OrderLoggedIn'
import OrderNotLoggedIn from './OrderNotLoggedIn'
export default function Order() {
    const [isLoggedIn, setIsloggedIn] = useState(true)
    return (
        <div>


            <header class="mb-5">
                <div class="container-fluid" style={{ maxWidth: "100%;" }}>
                    <div class="row">
                        <div class="col-md-12 bg-img-about" style={{ backgroundImage: `url(${OrderImg})` }}>
                            <div class="">
                                <div class=" text-center text-uppercase ">
                                    <h2 class="banner-h2-text hvr-underline-from-center">Request A Qoute</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <div class="container-fluid mt-5 mb-2">
                <div class="row">
                    <div class="col-md-8 offset-md-2">
                        <div>
                            <h1 class="order-h1">To get more information about our request a qoute form, please complete <br /> the following information.</h1>
                            {isLoggedIn ? <OrderLoggedIn /> :  <OrderNotLoggedIn /> }
                        </div>

                    </div>

                </div>
            </div>



        </div>
    )
}
