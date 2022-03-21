import React from 'react'

function OrderLoggedIn() {
    return (
        <>
            <form action="" method="post" role="form">

                    {/* ////The commented code below will show when the user log in ////*/}


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
                            <select class="budget-select input-budget form-control" style={{ width: "19%;" }} name="currency" id="currency">
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
                

                {/*//// End of the commented code /////*/}


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
            </form>
        </>
    )
}

export default OrderLoggedIn;