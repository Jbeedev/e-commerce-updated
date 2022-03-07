import React from 'react'
import OrderImg from '../assets/Images/Printing-Services.png'

export default function Order() {
    return (
        <div>


<header class="mb-5">
        <div class="container-fluid" style={{maxWidth: "100%;"}}>
            <div class="row">
                <div class="col-md-12 bg-img-about" style={{backgroundImage: `url(${OrderImg})`}}>
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
                    <form action="" method="post" role="form">
                        <div class="row">
                            <div class="form-group col-md-6  ">
                                <label class="order-label-cust" for="first-name">First Name</label>
                                <input type="text" placeholder="first name" class="form-control" id="" />
                            </div>
                            <div class="form-group col-md-6 ">
                                <label class="order-label-cust" for="last_name">Last Name</label>
                                <input type="text" placeholder="last name" class="form-control" id="" />
                            </div>
                            <div class="form-group col-md-6  ">
                                <label class="order-label-cust" for="email">Email</label>
                                <input type="email" placeholder="email address" class="form-control" id="" />
                            </div>
                            <div class="form-group col-md-6 ">
                                <label class="order-label-cust" for="phone_number">Phone Number</label>
                                <div id="login" onsubmit="process(event)">
                                    <input id="phone" class="form-control /"
                                           type="tel" name="phone"
                                           required/>
                                    <input type="hidden" name="phone_no" id="phone-hidden" />
                                </div>
                            </div>
                            <div class="form-group col-md-12  ">
                                <label class="order-label-cust" for="address">Address</label>
                                <input type="text" placeholder="address" class="form-control" id="" />
                            </div>
                            <div class="form-group col-md-6 ">
                                <select onchange="initStates()" id="country-select" class="form-control" name="country" required>
                                    <option selected disabled>Country</option>
                                  </select>
                            </div>
                            <div class="form-group col-md-6 ">
                                <select id="state-select" name="state" class="form-control" required>
                                    <option selected disabled>State</option>
                                </select>
                            </div>
                            <div class="form-group col-md-6 ">
                                <label class="order-label-cust" for="city">City/Town</label>
                                <input type="text"  class="form-control" id="" />
                            </div>
                            <div class="form-group col-md-6 ">
                                <label class="order-label-cust" for="produc">Product/Service</label>
                                <select class="form-control" id="">
                                    <option value="" disabled selected>Select a service</option>
                                    <option value="1">Web Development</option>
                                    <option value="2">Mobile App Development</option>
                                    <option value="3">Digital Marketing</option>
                                    <option value="4">Data Science</option>
                                    <option value="5">Machine Learning</option>
                                    <option value="6">Graphic Design</option>
                                    <option value="7">Video Editing</option>
                                    <option value="8">Project Management</option>
                                    <option value="9">CyberSecurity</option>
                                    <option value="10">Consulting</option>
                                  </select>
                            </div>
                            
                            <div class="form-group col-md-6 ">
                                <label class="order-label-cust" for="scope">Scope of Work</label>
                                <textarea name="" class="form-control" id="" cols="30" rows="4"></textarea>
                            </div>
                            <div class="form-group col-md-6 ">
                                <label class="order-label-cust" for="addition">Additional Details <span class="click-h-order" data-toggle="modal" data-target="#add-details" >click here</span> </label>
                                <textarea name="" class="form-control" id="" cols="30" rows="4"></textarea>
                            </div>
                            <div class="form-group col-md-6 ">
                                <label class="order-label-cust" for="about_business">About Your Business</label>
                                 <textarea name="" class="form-control" id="" cols="30" rows="4"></textarea>
                            </div>
                            <div class="form-group col-md-6 ">
                                <label class="order-label-cust" for="competitor">Competitor</label>
                                 <textarea name="" class="form-control" id="" cols="30" rows="4"></textarea>
                            </div>
                            <div class="form-group col-md-6 ">
                                <label class="order-label-cust" for="target_audience">Target Audience</label>
                                <input type="text" placeholder="E.g Business, student, age, category etc " class="form-control" id="" />
                            </div>
                            <div class="form-group col-md-6 ">
                                <label class="order-label-cust" for="target_audience_size">Target Audience Size</label>
                                <input type="text" placeholder="E.g 50000" class="form-control" id="" />
                            </div>
                            <div class="form-group col-md-6 ">
                                <label class="order-label-cust" for="deadline">Deadline</label>
                                <input type="date" class="form-control" id="" />
                            </div>
                            <div class="form-group col-md-6 ">
                                <label class="order-label-cust" for="budget">Budget</label>
                                <div class="input-group-prepend ">
                                    <select class="budget-select input-budget form-control" style={{width: "19%;"}} name="currency" id="currency">
                                        <option class="budget-option" value="NGN">&#8358;</option>
                                        <option class="budget-option" value="USD">&#36;</option>
                                    </select>
                                    <input type="text" class="form-control" id="budget" name="budget" placeholder="budget" required />
                                     <span class="text-danger"></span>
                                </div>
                            </div>
                            <div class="form-group col-md-6  ">
                                <label class="order-label-cust" for="budget">Upload document <span class="click-h-order" data-toggle="modal" data-target="#clickAndUpload" >click here</span> </label> <br />
                                <div class="input-group-prepend ml-4 ">
                                    <input type="checkbox" class="order-checked custom-control-input" id="customControlInline" required />

                                  <label class="order-label-cust custom-control-label" for="customControlInline"><span>Check the box to accept our </span><a class="order-terms" 
                                       href="terms.html">Terms and   Conditions</a></label>
                                </div>
                            </div>

                            
                            {/* <!-- Modal --> */}
                            <div class="modal fade" id="clickAndUpload" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                <div class="modal-dialog modal-dialog-centered" role="document">
                                <div class="modal-content">
                                    <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLongTitle">Upload a file</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                    </div>
                                    <div class="modal-body">
                                    <form action="" method="post">
                                        <div class="row">
                                            <div class="col-md-12">
                                                <input type="file" name="" id="" /> 
                                            </div>
                                            <div class="col-md-12 mt-2"> 
                                                <input type="file" name="" id="" />
                                            </div>
                                        </div>
                                        
                                    </form>
                                    </div>
                                    <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary">Upload</button>
                                    </div>
                                </div>
                                </div>
                            </div>

                            {/* <!-- additional details --> */}

                            <div class="modal fade" id="add-details" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                <div class="modal-dialog modal-dialog-centered" role="document">
                                <div class="modal-content">
                                    <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLongTitle">Upload a file</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                    </div>
                                    <div class="modal-body">
                                    <form action="" method="post">
                                        <div class="row">
                                            <div class="col-md-12">
                                                <input type="file" name="" id="" /> 
                                            </div>
                                            <div class="col-md-12 mt-2"> 
                                                <input type="file" name="" id="" />
                                            </div>
                                        </div>
                                        
                                    </form>
                                    </div>
                                    <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary">Upload</button>
                                    </div>
                                </div>
                                </div>
                            </div>


                             {/* <!-- Modal end --> */}
                            
                            
                        </div>
                        <div class="text-center mt-4">
                            <button type="submit" class="order-submit hvr-bounce-to-right">Place Your Order</button>
                        </div>

                    </form>
                </div>

            </div>

        </div>
    </div>


            
        </div>
    )
}
