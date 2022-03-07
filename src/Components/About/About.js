import React from 'react'
import AboutImg from '../assets/Images/Printing-Services.png'

export default function About() {
    return (
        <div>

<header>
        <div class="container-fluid" style={{maxWidth: "100%;"}}>
            <div class="row">
                <div class="col-md-12 bg-img-about" style={{backgroundImage:`url(${AboutImg})`}}>
                    <div class="">
                        <div class=" text-center text-uppercase ">
                            <h2 class="banner-h2-text hvr-underline-from-center">About Us</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</header>

    {/* <!-- Our Mission --> */}

    <div class="container-fluid mt-5 mb-5">
        <div class="row">
            <div class="col-md-4 offset-md-2 wow animate__fadeInLeft" data-wow-duration=".5s" >
                <h2 class="about-mission mt-3 hvr-underline-from-center">Our Mission</h2>
                <div>
                    <p class="mission-qoute">
                        To solve challenging performance problems for business and
                        organization using reliable digital strategies.
                        To Promote African Development by encouraging Business Sector and
                        Entrepreneurship in Africa.
                    </p>

                    <div class="mt-4">
                        <p class="join-d-team-btn"> <a class="hvr-bounce-to-right" href="contact.html">Join the Team</a></p>
                    </div>
                   
                </div>

            </div>
            <div class="col-md-4 offset-md-1 mt-3 wow animate__fadeInRight" data-wow-duration=".5s">
                
                <div>

                    <img src="assets/img/about-us-1.jpg" class="abt-mission-img" alt="" />
                   
                </div>

            </div>

           
        </div>
    </div>

    {/* <!-- Our Customer --> */}

    <div class="container-fluid mt-3 mb-5 customer-cont">
        <div class="container">
         <div class="row">
            
            <div class="col-md-6 mt-3 wow animate__fadeInLeft" data-wow-duration=".5s">
                
                <div>

                    <img src="assets/img/customer-love.jpg" class="customer-mission-img" alt="" />
                   
                </div>

            </div>

            <div class="col-md-6 wow animate__fadeInRight" data-wow-duration=".5s" >

                <h2 class="customer-h2-content mt-3 hvr-underline-from-center">Our Customer</h2>
                <div>
                    <p class="customer-qoute">
                        We do what we do in order to deliver compelling
                        and efficient digital
                        solutions, remarkable experiences, and
                        outstanding results for our clients to promote
                        their personal or business growth.
                    </p>

                    <div class="mt-5">
                        <p class="join-d-team-btn"> <a class="hvr-bounce-to-right" href="">Join the Team</a></p>
                    </div>
                   
                </div>

            </div>
        </div>

        </div>
    </div>

    {/* <!-- Our Team --> */}

    <div class="container-fluid mt-3">
        
         <div class="row">

                    <div class="col-12 text-center wow animate__fadeInDown" data-wow-duration=".5s">
                        <h2 class="team-h2-content my-2 hvr-underline-from-center">Our Team</h2>
                    </div>
                
                    <div class="col-md-5 offset-md-1 mt-3 wow animate__fadeInLeft" data-wow-duration=".5s">
                        <h2 class="founder-content hvr-underline-from-center">Founder's Note</h2>
                        <div>
                            <p class="lead-qoute">
                                    Businesses must work together to bridge poverty and underdevelopment,
                                    and this is more important now, more than ever. Something greater
                                    tend to be achieved through collective efforts. <br />
                                    There are countless benefits in exploring digital skills or solutions to our lives and businesses.
                                    <br /> Taking advantage of these can drive an economy to greater success. And taking these opportunities in a large number can
                                    cause rapid increase in the development of the society. <br /> <span class="read-more-hide-desk" style={{fontFamily: "poppins;"}}> A few number of successful companies cannot do it all alone.
                                    We are more about trying our best to increase the number of successful businesses, and also find ways to increase the
                                    gross income of individuals, to be able to have greater positive impact to our society.
                                    </span><p class="me3 read-more-btn hvr-bounce-to-right" id="readMore">read more</p>
                            </p>   
                        </div>
                    </div>

                    <div class="col-md-5 offset-md-1 mt-3 ">
                        <div class="wow animate__fadeInRight" data-wow-duration=".5s">
                            <img src="assets/img/Founder.png" class="lead-c-img hvr-grow" alt="" />
                        </div>
                    </div>
          </div>
        </div>

    {/* <!-- team --> */}

    <div class="container wow animate__fadeIn" data-wow-duration="2s">
        <div class="row mt-5 team-row">
            <div class='col-md-6  col-xl-4  mb-3'>
                <div class='container-fluid relative mb-5 mt-5'>
                    <div class="about-team-card shadow  mt-n5">
                        <div class='contain w-100 h-75'>
                            <img src="assets/img/Ajibola.png"
                                 alt="software development companies in Ilorin"
                                 class='sizing img-fluid img-responsive image hvr-grow-text'/>
                            <div class='overlay'>
                                <div class='about-text p-2'>
                                    Surely, at the beginning you will fail, people will mock you. But don't
                                    loose hope because if u don't fail then you are not even trying. Soon, you
                                    will become the best at it
                                </div>
                            </div>
                        </div>
                        <h4 class='role-name py-2 px-3'>Ajibade Ajibola</h4>
                        <p class="role-tittle ">Cyber Security Expert</p>
                    </div>
                </div>
            </div>

            <div class='col-md-6 col-xl-4  mb-3'>
                <div class='container-fluid relative mb-5 mt-5'>
                    <div class="about-team-card shadow  mt-n5">
                        <div class='contain w-100 h-75'>
                            <img src="assets/img/TENPLUS-LABAKE.png"
                                 alt="software development companies in Ilorin"
                                 class='sizing img-fluid img-responsive image hvr-grow'/>
                            <div class='overlay'>
                                <div class='about-text p-2'>
                                    Experience is the name everyone gives to their mistakes. In the end, you get
                                    better. Always put in efforts to solving a problem.
                                </div>
                            </div>
                        </div>
                        <h4 class='role-name py-2 px-3'>Ladele Omolabeke</h4>
                        <p class="role-tittle ">Chief Marketing Officer</p>
                    </div>
                </div>
            </div>
            <div class='col-md-6 col-xl-4  mb-3'>
                <div class='container-fluid relative mb-5 mt-5'>
                    <div class="about-team-card shadow  mt-n5">
                        <div class='contain w-100 h-75'>
                            <img src="assets/img/ahmad.png" alt="software development companies in Ilorin"
                                 class='sizing img-fluid img-responsive  image hvr-grow'/>
                            <div class='overlay'>
                                <div class='about-text p-2'>
                                    Debugging can be frustrating and stressful but the feeling of satisfaction
                                    after solving a problem is worth it
                                </div>
                            </div>
                        </div>
                        <h4 class='role-name py-2 px-3'>Busari Ahmad</h4>
                        <p class="role-tittle ">Chief Technology Officer</p>
                    </div>
                </div>
            </div>
            <div class='col-md-6 col-xl-4 display-all-hide  mb-3'>
                <div class='container-fluid relative mb-5 mt-5'>
                    <div class="about-team-card shadow  mt-n5">
                        <div class='contain w-100 h-75'>
                            <img src="assets/img/Taofeeq.png" alt="web development company in nigeria"
                                 class='sizing img-fluid img-responsive  image hvr-grow'/>
                            <div class='overlay'>
                                <div class='about-text p-2'>
                                    Don't be too comfortable with your comfort, explore and get new things done.
                                    That's the winning strength
                                </div>
                            </div>
                        </div>
                        <h4 class='role-name py-2 px-3'>Isiak Abdul Azeez</h4>
                        <p class="role-tittle ">Creative Designer</p>
                    </div>
                </div>
            </div>
            <div class='col-md-6 col-xl-4 display-all-hide   mb-3'>
                <div class='container-fluid relative mb-5 mt-5'>
                    <div class="about-team-card shadow  mt-n5">
                        <div class='contain w-100 h-75'>
                            <img src="assets/img/Taofeeq.png" alt="graphics design in nigeria near me"
                                 class='sizing img-fluid img-responsive  image hvr-grow'/>
                            <div class='overlay'>
                                <div class='about-text p-2'>
                                    Identify your dream buyers is the vital most pervading valuable in
                                    marketing
                                </div>
                            </div>
                        </div>
                        <h4 class='role-name py-2 px-3'>Mas'ud Taofeeq</h4>
                        <p class="role-tittle ">Marketing & SEO Expert</p>
                    </div>
                </div>
            </div>

            <div class='col-md-6 col-xl-4 display-all-hide   mb-3'>
                <div class='container-fluid relative mb-5 mt-5'>
                    <div class="about-team-card shadow  mt-n5">
                        <div class='contain w-100 h-75'>
                            <img src="assets/img/LIZZY_PIC.png" alt="graphics design in nigeria near me"
                                 class='sizing img-fluid img-responsive image hvr-grow'/>
                            <div class='overlay'>
                                <div class='about-text p-2'>
                                    Only half of Programming is coding. The other 90% is debugging.
                                </div>
                            </div>
                        </div>
                        <h4 class='role-name py-2 px-3'>Kolade Elizabeth</h4>
                        <p class="role-tittle ">Mobile App Developer</p>
                    </div>
                </div>
            </div>

            <div class='col-md-6 col-xl-4 display-all-hide  mb-3'>
                <div class='container-fluid relative mb-5 mt-5'>
                    <div class="about-team-card shadow  mt-n5">
                        <div class='contain w-100 h-75'>
                            <img src="assets/img/Faseeki-Friday.png"
                                 alt="web development company in nigeria"
                                 class='sizing img-fluid img-responsive  image hvr-grow'/>
                            <div class='overlay'>
                                <div class='about-text p-2'>
                                    Life is what happens when you're busy making other plans.
                                </div>
                            </div>
                        </div>
                        <h4 class='role-name py-2 px-3'>Faseeki Friday</h4>
                        <p class="role-tittle ">Full-stack Developer</p>
                    </div>
                </div>
            </div>

            <div class='col-md-6 col-xl-4 display-all-hide  mb-3'>
                <div class='container-fluid relative mb-5 mt-5'>
                    <div class="about-team-card shadow  mt-n5">
                        <div class='contain w-100 h-75'>
                            <img src="assets/img/Emmanuel.png" alt="web development company in nigeria"
                                 class='sizing img-fluid img-responsive  image hvr-grow'/>
                            <div class='overlay'>
                                <div class='about-text p-2'>
                                    Soon, there might be no reason and no way that a human mind will be able to
                                    keep up with an artificial intelligence machine.
                                </div>
                            </div>
                        </div>
                        <h4 class='role-name py-2 px-3'>Bolade Emmanuel</h4>
                        <p class="role-tittle ">Data Scientist</p>
                    </div>
                </div>
            </div>

            <div class='col-md-6 col-xl-4 display-all-hide  mb-3'>
                <div class='container-fluid relative mb-5 mt-5'>
                    <div class="about-team-card shadow  mt-n5">
                        <div class='contain w-100 h-75'>
                            <img src="assets/img/Kutashi.png" alt="web development company in nigeria"
                                 class='sizing img-fluid img-responsive  image hvr-grow'/>
                            <div class='overlay'>
                                <div class='about-text p-2'>
                                    By far, the greatest danger of Artificial Intelligence is that people
                                    conclude too early that they understand it
                                </div>
                            </div>
                        </div>
                        <h4 class='role-name py-2 px-3'>Muhammad Kutashi</h4>
                        <p class="role-tittle ">Machine Learning Engineer</p>
                    </div>
                </div>
            </div>

            <div class="col-md-12 text-center">
                <div class="show-all-team mb-3">
                    <p class="show-all">Show more</p>
                </div>
             </div>
        </div>
    </div>

    {/* <!-- team end --> */}

    {/* <!-- We go beyond! --> */}

    <div class="container-fluid mt-3">
        
        <div class="row">

            <div class="col-md-6 we-go-beyond wow animate__fadeInLeft" data-wow-duration=".5s">
                <div>
                    
                        <h2 class="beyond-h3 hvr-underline-from-center">WE Go Beyond!</h2>
                        <p class="beyond-content-post">We try not to deliver, but over-deliver in every of our projects.
                            We are a performance agency that drives digital strategy, growth and revenue.
                        </p>
                </div>
            </div>

            <div class="col-md-6 wow animate__fadeInRight" data-wow-duration=".5s" style={{paddingRight: "0px;", paddingLeft: "0px;"}}>
                <div>
                    <img src="assets/img/What-we-do-tenplus.png" class="we-go-img" alt="" />
                </div>
            </div>


        </div>

    </div> 


{/* <!-- Our Value --> */}

  {/* <!--Carousel Wrapper--> */}
  <div class="abt-swip-carousel">
    <div id="multi-item-example"  class=" container carousel slide carousel-multi-item " data-ride="carousel">
  
      {/* <!--Slides--> */}
      <div class="carousel-inner text-center" role="listbox">
  
        {/* <!--First slide--> */}
        <div class="carousel-item active">
  
          <div class="row">
            <div class="col-md-2">

              <div class="swiper-slide">
                <div class="border-4 shadow-lg  " id="about-swiper-height">
                    <div class="card-img-top p-3 text-light" style={{backgroundColor:"green"}}
                         alt="">
                        Excellence
                    </div>

                    <div class="card-body">
                        <p class="card-text-ab">Our solution always promises excellent results</p>
                    </div>
                </div>
            </div>
            </div>
  
            <div class="col-md-2 offset-md-1  clearfix d-none d-md-block">

              <div class="swiper-slide">
                <div class="border-4 shadow-lg  " id="about-swiper-height">
                    <div class="card-img-top p-3 text-light" style={{backgroundColor: "#F44B18"}}
                         alt="">
                         Affordability
                    </div>

                    <div class="card-body">
                        <p class="card-text-ab"> Our prices are the cheapest compared to the value customers
                            get from other brands for similar service
                        </p>
                    </div>
                </div>
            </div>
            </div>
  
            <div class="col-md-2 offset-md-1  clearfix d-none d-md-block">
             
              <div class="swiper-slide">
                <div class="border-4 shadow-lg  " id="about-swiper-height">    
                    <div class="card-img-top p-3 text-light" style={{backgroundColor:"#1F4395"}}
                        alt="">
                         Innovation
                    </div>

                    <div class="card-body">
                        <p class="card-text-ab">Innovative ideas make our customers stand out in the
                            results they get</p>
                    </div>
                </div>
            </div>
            </div>
            <div class="col-md-2 offset-md-1  clearfix d-none d-md-block">
             
              <div class="swiper-slide">
                <div class="border-4 shadow-lg  " id="about-swiper-height">
                    <div class="card-img-top p-3" style={{backgroundColor:"rgb(19, 19, 19);", color: "white;"}}
                    alt="">
                   Transparency
               </div>
               <div class="card-body">
                   <p class="card-text-ab">Our processes are open and clear to our customers</p>

               </div>
                   
                </div>
            </div>
            </div>
          </div>
  
        </div>
        {/* <!--/.First slide--> */}
  
        {/* <!--Second slide--> */}

                <div class="carousel-item ">
          
                  <div class="row">
                    <div class="col-md-2">
        
                      <div class="swiper-slide">
                        <div class="border-4 shadow-lg  " id="about-swiper-height">
                            <div class="card-img-top p-3 text-light" style={{backgroundColor:"#F44B18"}}
                                    alt="">
                                Timeliness
                            </div>
                            <div class="card-body">
                                <p class="card-text-ab">Our project management strategies help in achieving success in time
                                 for our clients</p>
                            </div>
                           
                        </div>
                    </div>
                    </div>
                    <div class="col-md-2 offset-md-1  clearfix d-none d-md-block">
                      <div class="swiper-slide">
                        <div class="border-4 shadow-lg  " id="about-swiper-height">
                             <div class="card-img-top p-3 text-light" style={{backgroundColor: "green"}}
                                alt="">
                                Feedback
                            </div>

                            <div class="card-body">
                                <p class="card-text-ab"> We always listen to our customers' reviews to help deliver better
                                                    services
                                </p>
                            </div> 
                           
                        </div>
                    </div>
                    </div>
          
                    <div class="col-md-2 offset-md-1  clearfix d-none d-md-block">
        
                      <div class="swiper-slide">
                        <div class="border-4 shadow-lg  " id="about-swiper-height">
                        <div class="card-img-top p-3 text-light" style={{backgroundColor:"#1F4395"}}
                                alt="">
                            Innovation
                        </div>
                        <div class="card-body">
                            <p class="card-text-ab">Innovative ideas make our customers stand out in the
                                                    results they get</p>

                        </div>
                        </div>
                    </div>
                    </div>
          
                    <div class="col-md-2 offset-md-1  clearfix d-none d-md-block">
                     
                      <div class="swiper-slide">
                        <div class="border-4 shadow-lg  " id="about-swiper-height">    
                                <div class="card-img-top p-3 text-light" style={{backgroundColor:"rgb(19, 19, 19);", color: "white;"}}
                                alt="">  Excellence
                                </div>
    
                                <div class="card-body">
                                    <p class="card-text-ab">Our solution always promises excellent results</p>
                                </div>
                        </div>
                    </div>
                    </div>
                    
                  </div>
          
                </div>
        
        {/* <!--/.Second slide--> */}

        {/* <!--THird slide--> */}

        <div class="carousel-item ">
          
            <div class="row">

                <div class="col-md-2">
             
                    <div class="swiper-slide">
                      <div class="border-4 shadow-lg  " id="about-swiper-height">    
                          <div class="card-img-top p-3 text-light" style={{backgroundColor:"#1F4395"}}
                              alt="">
                               Innovation
                          </div>
      
                          <div class="card-body">
                              <p class="card-text-ab">Innovative ideas make our customers stand out in the
                                  results they get</p>
                          </div>
                      </div>
                  </div>
                  </div>
                  <div class="col-md-2 offset-md-1  clearfix d-none d-md-block">
                   
                    <div class="swiper-slide">
                      <div class="border-4 shadow-lg  " id="about-swiper-height">
                          <div class="card-img-top p-3" style={{backgroundColor:"rgb(19, 19, 19);", color: "white;"}}
                          alt="">
                         Transparency
                     </div>
                     <div class="card-body">
                         <p class="card-text-ab">Our processes are open and clear to our customers</p>
      
                     </div>
                         
                      </div>
                  </div>
                  </div>
              <div class="col-md-2 offset-md-1  clearfix d-none d-md-block">
  
                <div class="swiper-slide">
                  <div class="border-4 shadow-lg  " id="about-swiper-height">
                      <div class="card-img-top p-3 text-light" style={{backgroundColor:"#F44B18"}}
                              alt="">
                          Timeliness
                      </div>
                      <div class="card-body">
                          <p class="card-text-ab">Our project management strategies help in achieving success in time
                           for our clients</p>
                      </div>
                     
                  </div>
              </div>
              </div>
              <div class="col-md-2 offset-md-1  clearfix d-none d-md-block">
                <div class="swiper-slide">
                  <div class="border-4 shadow-lg  " id="about-swiper-height">
                       <div class="card-img-top p-3 text-light" style={{backgroundColor:"green"}}
                          alt="">
                          Feedback
                      </div>

                      <div class="card-body">
                          <p class="card-text-ab"> We always listen to our customers' reviews to help deliver better
                                              services
                          </p>
                      </div> 
                     
                  </div>
              </div>
              </div>
              
            </div>
    
          </div>
        
        {/* <!--/.THird slide--> */}
  
    
  
      </div>
      {/* <!--/.Slides--> */}
  
       {/* <!--Controls--> */}
       <div class="controls-top text-center">
          <a class="btn-floating" href="#multi-item-example" data-slide="prev"><i class="fa fa-chevron-left abt-chevron"></i></a>
          <a class="btn-floating" href="#multi-item-example" data-slide="next"><i class="fa fa-chevron-right abt-chevron"></i></a>
        </div>
        {/* <!--/.Controls--> */}
  
    </div>
  
  </div>
    {/* <!--/.Carousel Wrapper--> */}

    
    


    {/* <!-- Mix with us --> */}

    <div class="container-fluid">
        
        <div class="row">

            <div class="col-md-6 wow animate__fadeInLeft" data-wow-duration=".5s" style={{paddingRight: "0px;", paddingLeft: "0px;"}}>
                <div>
                    <img src="assets/img/about-us-3.jfif" class="we-go-img" alt="" />
                </div>
            </div>

            <div class="col-md-6 we-go-beyond wow animate__fadeInRight" data-wow-duration=".5s">
                <div>
                    
                        <h2 class="beyond-h2 hvr-underline-from-center">Mix With Us</h2>
                        <p class="beyond-content-post"> We were born with the belief that goal driven people with different backgrounds and experience, who come
                            together to pursue a common goal usually achieve one of the best results. Talk to us to join our team.
                        </p>
                </div>
            </div>


        </div>

    </div> 
            
        </div>
    )
}
