const Footer = () => {
    return (
        <div>
             {/* <!-- Footer --> */}

{/* <!-- scroll to top Button --> */}
<div class="contentDiv" id="content">
   <button class="back-to-top" type="button"></button>
 </div>
 {/* <!-- scroll to top Button --> */}

<div class="container-fluid footer-cont">
       
   <div class="row">
       <div class="col-md-3">
           <h6 class="footer-header ">Contact Us</h6>
           <div class="footer-content-cont">
               <p><i class="fa fa-phone mr-2 text-right"></i><a href="tel:+2348139251969">08139251969</a> </p>
               <p><i class="fa fa-envelope mr-2 text-right"></i><a href = "mailto:info@tenpluslabs.com?subject = Feedback&body = Message">
                   info@tenpluslabs.com </a> </p>
               <p><i class="fa fa-map-marker mr-2 text-right"></i><a href="https://goo.gl/maps/X9UebAW9PATQC66E9"> No. 29, University Road, Tanke, <br /> <span class="mr-2">Ilorin, Kwara State.</span> </a></p>

           </div>
           <div class="social-icon">
               <a href="https://web.facebook.com/tenpluslabs" class="mr-3">
                   <i class="fa fa-facebook-f"></i>
               </a>
               <a href="https://instagram.com/tenpluslabs_official" class="mr-3">
                   <i class="fa fa-instagram"></i>
               </a>
               <a href="https://twitter.com/tenpluslabs" class="mr-3">
                   <i class="fa fa-twitter"></i>
               </a>
               <a href="https://linkedin.com/company/tenplus-digital-labs" class="mr-3">
                   <i class="fa fa-linkedin"></i>
               </a>
           </div>
       </div>
       <div class="col-md-3">
           <h6 class="footer-header">Services</h6>
           <div class="footer-content-cont-s ">
               <p class="mt-3">
                   <a href="service.html?to=web">Web Development</a>
               </p>
               <p>
                   <a href="service.html?to=app" >Mobile App Development</a>
               </p>
               <p>
                   <a href="service.html?to=graphics" >Graphics Design</a>
               </p>
               <p>
                   <a href="service.html?to=digital" >Digital Marketing</a>
               </p>
               <p>
                   <a href="service.html?to=ai" >Artificial Intelligence</a>
               </p>
               <p>
                   <a href="service.html?to=project#service" >Project Management</a>
               </p>
               <p>
                   <a href="service.html?to=print#service" >Printing Services</a>
               </p>
               <p>
                   <a href="service.html?to=video#service" >Video Editing</a>
               </p>
               <p>
                   <a href="service.html?to=cyber#service" >Cybersecurity</a>
               </p>
               <p>
                   <a href="service.html?to=blockchain#service" >Blockchain</a>
               </p>
               <p>
                   <a href="service.html?to=consult#service" >IT Consulting </a>
               </p>
               <p>
                   <a href="service.html?to=training#service" >IT Training</a>
               </p>
               {/* <!-- Links --> */}
           </div>
       </div>
       <div class="col-md-3">
           <h6 class="footer-header">Useful Links</h6>
           <div class="footer-content-cont-s">
               <p  class="mt-3">
               <a href="store.html">Store</a>
               </p>
               <p  class="mt-3">
               <a href="printing.html">Printing</a>
               </p>
               <p  class="">
                   <a href="portfolio.html">Portfolio</a>
                   <p>
                     <a href="about.html">About Us</a>
                 </p>
                 <p>
                     <a href="careers.html">Careers</a>
                 </p>
                 <p>
                   <a href="who-we-serve.html">Who we serve</a>
               </p>
               </p>
               <p>
                   <a href="https://portal.tenpluslabs.com">Portal</a>
               </p>
               <p>
                   <a href="blog.html">Blog</a>
               </p>
               {/* <p>
               <a href="/affiliate">Become an Affiliate</a>
               </p> */}
               <p>
                   <a href="terms.html">Terms And Conditions</a>
               </p>
               <p>
                   <a href="privacy.html">Privacy Policy</a>
               </p>
               <p>
                   <a href="contact.html">Contact Us</a>
               </p>
              
               {/* <!-- Links --> */}

           </div>
       </div>

       <div class="col-md-3">
           <h6 class="footer-header">Subscribe</h6>
           <div class="footer-content-cont-s">
               <p  class="mt-3">
                   Subscribe to our news letter 
               </p>
               <form action="" method="post" style={{width: "80%"}}>
                   <input type="email" name="" class="form-control" placeholder="Your email here" id="" /> 
                   <div>
                       <button type="submit" class="hvr-bounce-to-right footer-sub">Subscribe</button>
                   </div>
                   
               </form>
           </div>
       </div>
   </div>

</div>

<div class="footer-container text-center">

   {/* <!-- Copyright --> */}
   <div class="text-center p-4 text-white">
       &copy; Copyright  <script>document.write(new Date().getFullYear());</script> <span class="text-reset fw-bold "> Tenplus Digital Labs</span>
   </div>
   {/* <!-- Copyright --> */}

</div>
        </div>
    );
}
 
export default Footer;