import React from 'react'
import PortfolioImg from '../assets/Images/Printing-Services.png'
import PortfolioImg1 from '../assets/Images/grace-school.png'
import PortfolioImg2 from '../assets/Images/carfax.png'
import PortfolioImg3 from '../assets/Images/OCH.png'
import PortfolioImg4 from '../assets/Images/Lakecoast-App.png'
import PortfolioImg5 from '../assets/Images/Tencab.png'
import PortfolioImg6 from '../assets/Images/Lakecoast-App.png'
import PortfolioImg7 from '../assets/Images/Flyer.png'
import PortfolioImg8 from '../assets/Images/Logo-graphics.png'
import PortfolioImg9 from '../assets/Images/Magazine.png'
import PortfolioImg10 from '../assets/Images/Bill-board.png'
import PortfolioImg11 from '../assets/Images/Calendar.png'
import PortfolioImg12 from '../assets/Images/Digital.png'
import PortfolioImg13 from '../assets/Images/Frame-printing.png'
import PortfolioImg14 from '../assets/Images/Bill-board.png'
import PortfolioImg15 from '../assets/Images/Digital.png'
import PortfolioImg16 from '../assets/Images/CAR.png'
import PortfolioImg17 from '../assets/Images/Quick-Health.png'
import PortfolioImg18 from '../assets/Images/ORE.png'
import PortfolioImg19 from '../assets/Images/CAR.png'
import PortfolioImg20 from '../assets/Images/GLAM.png'
import PortfolioImg21 from '../assets/Images/Quick-Health.png'
import PortfolioImg22 from '../assets/Images/consulting-logo.png'
import PortfolioImg23 from '../assets/Images/consulting.jpg'
import PortfolioImg24 from '../assets/Images/copywriting.jpg'
import PortfolioImg25 from '../assets/Images/WHATS.png'
import PortfolioImg26 from '../assets/Images/COurses.png'
import PortfolioImg27 from '../assets/Images/kid-learning.jpeg'
    





export default function Portfolio() {
    return (
        <div>

            <header>
                    <div class="container-fluid" style={{maxWidth: "100%;"}}>
                        <div class="row">
                            <div class="col-md-12 bg-img-port" style={{backgroundImage: `url(${PortfolioImg})`}}>
                                <div class="">
                                    <div class=" text-center text-uppercase ">
                                        <h2 class="banner-h2-text hvr-underline-from-center">Portfolio</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </header>

    <div class="container-fluid">
        <div class="row">
            <div class="col-md-10 offset-md-1 mt-5 cont-best-quality wow animate__fadeInLeft" data-wow-duration=".5s">
                <h1>We Give The Best Quality, Start</h1>
                <h1>Your Project Now!</h1>
                  
             <div class="mt-4">
                <p class="more-info-port"> <strong>NOTE:</strong> These are few of our portfolios, due to</p>
                <p class="more-info-ports">privacy agreement with our clients.</p>
            </div>
                
            </div>
        </div>
    </div>

   

    <div class="container mt-3 wow animate__fadeIn" data-wow-duration="3s" data-wow-delay="0.1s">

        <div class="dropdown-on-sm">
            <div class="row">
                <div class="col-md-8 offset-md-1" > 
                    <label for="design">Select the service from the drop down</label>
                    <select class="form-control mt-3" id="design101">
                        <option selected>Select</option>
                        <option value="web">Web Development</option>
                        <option value="app">Mobile App Development</option>
                        <option value="graphics">Graphics Design</option>
                        <option value="printing">Printing Services</option>
                        <option value="marketing">Digital Marketing</option>
                        <option value="ai">Data Sci. And Machine Learn</option>
                        <option value="project">Project Management</option>
                        <option value="consulting">IT Consulting</option>
                        <option value="training">IT Training</option>
                    </select>
              </div>
         </div>
        </div>
     
        <div class="row">
                <div class="col-md-1">    
                </div>
                <div class="col-md-1 show-all-img">
                    <p class="portfolio-box-all hvr-outline-in">All</p>    
                </div>
                <div class="col-md-2 show-web">
                    <p class="portfolio-box hvr-outline-in " style={{width: "100%;"}}>Web Development</p>    
                </div>
                <div class="col-md-3 show-app">
                    <p class="portfolio-box hvr-outline-in  " style={{width: "100%;"}} >Mobile App Development</p>    
                </div>
                <div class="col-md-2 show-graphics">
                    <p class="portfolio-box hvr-outline-in  " style={{width: "100%;"}} >Graphics Design</p>    
                </div>
                <div class="col-md-2 show-print">
                    <p class="portfolio-box hvr-outline-in  " style={{width: "100%;"}} >Printing Services</p>    
                </div> 
                <div class="col-md-1">    
                </div> 

                <div class="col-md-2 show-market">
                    <p class="portfolio-box hvr-outline-in " style={{width: "100%;"}} >Digital Marketing</p>    
                </div>  
                
                <div class="col-md-3 show-ai">
                    <p class="portfolio-box hvr-outline-in " style={{width: "100%;"}} >Data Sci. And Machine Learn.</p>    
                </div>
                <div class="col-md-3 show-project">
                    <p class="portfolio-box hvr-outline-in " style={{width: "100%;"}} >Project Management</p>    
                </div>
                <div class="col-md-2 show-consult">
                    <p class="portfolio-box hvr-outline-in " style={{width: "100%;"}} >IT Consulting</p>    
                </div>
                <div class="col-md-2 show-training">
                    <p class="portfolio-box hvr-outline-in " style={{width: "100%;"}} >IT Training</p>    
                </div>
        </div>

    </div>


     <div class="container wow animate__fadeIn" data-wow-duration="3s" data-wow-delay="0.1s">

            {/* <!-- popup modal --> */}

            {/* <!-- The Modal --> */}
            <div id="myModal" class="modal">

                {/* <!-- The Close Button --> */}
                <span class="close">&times;</span>
            
                {/* <!-- Modal Content (The Image) --> */}
                <img class="modal-content" id="img /01" />
            
                {/* <!-- Modal Caption (Image Text) --> */}
                <div id="caption"></div>
            </div> 

            <div class="row" id="myList">
            
                <div class="col-md-4 to-list-w show-pox  mt-5">
                    <img src={PortfolioImg1} id="MyImg"  class="portfolio-img img-responsive hvr-grow " height="200px" width="90%"  alt="Web Design" />  
                    <div class="text-center">
                        <p>Web Development</p>
                    </div>
                </div>
                <div class="col-md-4 to-list-w show-pox  mt-5 ">
                    <img src={PortfolioImg2} id="MyImg2"  class="portfolio-img img-responsive hvr-grow " height="200px" width="90%" alt="Web Design" />   
                     <div class="text-center">
                        <p>Web Development</p>
                    </div> 
                </div>
                <div class="col-md-4 to-list-w show-pox  mt-5 ">
                    <img src={PortfolioImg3} id="MyImg3" class="portfolio-img img-responsive hvr-grow " height="200px" width="90%"  alt="Web Design" />   
                     <div class="text-center">
                        <p>Web Development</p>
                    </div> 
                </div>
                
                <div class="col-md-4 to-list-ap show-pox  mt-5 list-hide">
                    <img src={PortfolioImg4} id="MyImg4" class="portfolio-img img-responsive hvr-grow " height="200px" width="90%"  alt="Mobile App" />
                     <div class="text-center">
                        <p>Mobile App Dev.</p>
                    </div> 
                </div>
                <div class="col-md-4 to-list-ap show-pox  mt-5 list-hide ">
                    <img src={PortfolioImg5} id="MyImg5" class="portfolio-img img-responsive hvr-grow " height="200px" width="90%"  alt="Mobile App" />   
                     <div class="text-center">
                        <p>Mobile App Dev.</p>
                    </div> 
                </div>
                <div class="col-md-4 to-list-ap show-pox  mt-5 list-hide ">
                    <img src={PortfolioImg6} id="MyImg6" class="portfolio-img img-responsive hvr-grow " height="200px" width="90%"   alt="Mobile App" />   
                     <div class="text-center">
                        <p>Mobile App Dev.</p>
                    </div> 
                </div>

                <div class="col-md-4 to-list-g show-pox  mt-5 list-hide">
                    <img src={PortfolioImg7} id="MyImg7" class="portfolio-img img-responsive hvr-grow " height="200px" width="90%"  alt="Graphics" />   
                     <div class="text-center">
                        <p>Logo Design</p>
                    </div> 
                </div>
                <div class="col-md-4 to-list-g show-pox  mt-5 list-hide ">
                    <img src={PortfolioImg8} id="MyImg8" class="portfolio-img img-responsive hvr-grow " height="200px" width="90%"  alt="Graphics" />   
                     <div class="text-center">
                        <p>Flyer</p>
                    </div> 
                </div>
                <div class="col-md-4 to-list-g show-pox  mt-5 list-hide ">
                    <img src={PortfolioImg9} id="MyImg9" class="portfolio-img img-responsive hvr-grow " height="200px" width="90%"   alt="Graphics" />   
                     <div class="text-center">
                        <p>Billboard</p>
                    </div> 
                </div>

                <div class="col-md-4 to-list-p show-pox  mt-5 list-hide">
                    <img src={PortfolioImg10}  id="MyImg10" class="portfolio-img img-responsive hvr-grow" height="200px" width="90%"  alt="Printing" />   
                     <div class="text-center">
                        <p>Magazine</p>
                    </div> 
                </div>
                <div class="col-md-4 to-list-p show-pox  mt-5 list-hide ">
                    <img src={PortfolioImg11} id="MyImg11" class="portfolio-img img-responsive hvr-grow " height="200px" width="90%" alt="Printing" />   
                     <div class="text-center">
                        <p>Calendar</p>
                    </div> 
                </div>
                <div class="col-md-4 to-list-p show-pox  mt-5 list-hide ">
                    <img src={PortfolioImg12} id="MyImg12" class="portfolio-img img-responsive hvr-grow " height="200px" width="90%"  alt="Printing" />   
                     <div class="text-center">
                        <p>Frame</p>
                    </div> 
                </div>

                <div class="col-md-4 to-list-dig show-pox  mt-5 list-hide">
                    <img src={PortfolioImg13} id="MyImg13" class="portfolio-img img-responsive hvr-grow " height="200px" width="90%"  alt="Marketing" />   
                     <div class="text-center">
                        <p>Digital Marketing</p>
                    </div> 
                </div>
                <div class="col-md-4 to-list-dig show-pox  mt-5 list-hide ">
                    <img src={PortfolioImg14} id="MyImg14" class="portfolio-img img-responsive hvr-grow " height="200px" width="90%" alt="Marketing" />   
                     <div class="text-center">
                        <p>Copywriting</p>
                    </div> 
                </div>
                <div class="col-md-4 to-list-dig show-pox  mt-5 list-hide ">
                    <img src={PortfolioImg15} id="MyImg15" class="portfolio-img img-responsive hvr-grow " height="200px" width="90%"  alt="Marketing" />   
                     <div class="text-center">
                        <p>SEO</p>
                    </div> 
                </div>

                <div class="col-md-4 to-list-ai show-pox  mt-5 list-hide">
                    <img src={PortfolioImg16} id="MyImg16" class="portfolio-img img-responsive hvr-grow " height="200px" width="90%"  alt="AI" />   
                     <div class="text-center">
                        <p>AI</p>
                    </div> 
                </div>
                <div class="col-md-4 to-list-ai show-pox  mt-5 list-hide ">
                    <img src={PortfolioImg17} id="MyImg17" class="portfolio-img img-responsive hvr-grow " height="200px" width="90%" alt="AI" />   
                     <div class="text-center">
                        <p>Machine Learning</p>
                    </div> 
                </div>
                <div class="col-md-4 to-list-ai show-pox  mt-5 list-hide ">
                    <img src={PortfolioImg18} id="MyImg18" class="portfolio-img img-responsive hvr-grow " height="200px" width="90%"  alt="AI" />   
                     <div class="text-center">
                        <p>AI</p>
                    </div> 
                </div>

                <div class="col-md-4 to-list-proj show-pox  mt-5 list-hide">
                    <img src={PortfolioImg19} id="MyImg19" class="portfolio-img img-responsive hvr-grow " height="200px" width="90%"  alt="Project" />   
                     <div class="text-center">
                        <p>Project Management</p>
                    </div> 
                </div>
                <div class="col-md-4 to-list-proj show-pox  mt-5 list-hide ">
                    <img src={PortfolioImg20} id="MyImg20" class="portfolio-img img-responsive hvr-grow " height="200px" width="90%"alt="Project" />   
                     <div class="text-center">
                        <p>Project Management</p>
                    </div> 
                </div>
                <div class="col-md-4 to-list-proj show-pox  mt-5 list-hide ">
                    <img src={PortfolioImg21} id="MyImg21" class="portfolio-img img-responsive hvr-grow " height="200px" width="90%" alt="Project" />   
                     <div class="text-center">
                        <p>Project Management</p>
                    </div> 
                </div>

                <div class="col-md-4 to-list-c show-pox  mt-5 list-hide">
                    <img src={PortfolioImg22} id="MyImg22" class="portfolio-img img-responsive hvr-grow " height="200px" width="90%"  alt="IT Consulting" />   
                     <div class="text-center">
                        <p>IT Consulting</p>
                    </div> 
                </div>
                <div class="col-md-4 to-list-c show-pox  mt-5 list-hide ">
                    <img src={PortfolioImg23} id="MyImg23" class="portfolio-img img-responsive hvr-grow " height="200px" width="90%" alt="IT Consulting" />   
                     <div class="text-center">
                        <p>IT Consulting</p>
                    </div> 
                </div>
                <div class="col-md-4 to-list-c show-pox  mt-5 list-hide ">
                    <img src={PortfolioImg24} id="MyImg24" class="portfolio-img img-responsive hvr-grow " height="200px" width="90%"  alt="IT Consulting" />   
                     <div class="text-center">
                        <p>IT Consulting</p>
                    </div> 
                </div>

                <div class="col-md-4 to-list-t show-pox  mt-5 list-hide">
                    <img src={PortfolioImg25} id="MyImg25" class="portfolio-img img-responsive hvr-grow " height="200px" width="90%"  alt="IT Training" />   
                     <div class="text-center">
                        <p>IT Training</p>
                    </div> 
                </div>
                <div class="col-md-4 to-list-t show-pox  mt-5 list-hide ">
                    <img src={PortfolioImg26} id="MyImg26" class="portfolio-img img-responsive hvr-grow " height="200px" width="90%" alt="IT Training" />   
                     <div class="text-center">
                        <p>IT Training</p>
                    </div> 
                </div>
                <div class="col-md-4 to-list-t show-pox  mt-5 list-hide ">
                    <img src={PortfolioImg27} id="MyImg27" class="portfolio-img img-responsive hvr-grow " height="200px" width="90%"  alt="IT Training" />   
                     <div class="text-center">
                        <p>IT Training</p>
                    </div> 
                </div>

                
            </div>
           

            <div class="mt-5">
                    <div class="text-center">
                        <p class="see-more-box hvr-bounce-to-right show-all-img mr-2" id="loadMore">Show More</p>    
                        <p class="see-more-box hvr-bounce-to-right" id="showLess">Show less</p>
                    </div>
            </div>

           

   

    </div> 

    <div class="cont-mind-project text-center">

        <h4 class="h4-project-port wow animate__fadeInLeft" data-wow-duration=".5s"> Have Any Project in Mind </h4>
        <p class="p-project-port wow animate__fadeInRight" data-wow-duration=".5s">Get in Touch with Us Today</p>

        <div class="text-center mt-4">
            <a href="order.html" class="talk-to-box hvr-bounce-to-right wow animate__fadeInUp" data-wow-duration="2s" >Talk to Us</a>    
        </div>

    </div>
            
        </div>
    )
}
