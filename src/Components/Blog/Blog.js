import './Blog.css';
import HeaderBg from '../HeaderBg';
import NewsImg1 from "../assets/News/news-10.jpg"
import NewsImg2 from "../assets/News/admin-1.png"
import NewsImg3 from "../assets/News/news-11.jpg"
import NewsImg4 from "../assets/News/admin-2.png"
import NewsImg5 from "../assets/News/news-12.jpg"
import NewsImg6 from "../assets/News/admin-3.png"
import NewsImg7 from "../assets/News/news-13.jpg"
import NewsImg8 from "../assets/News/admin-4.png"
import Post1 from "../assets/News/post-1.jpg"
import Post2 from "../assets/News/post-2.jpg"
import Post3 from "../assets/News/post-3.jpg"


const Blog = () => {
    return (
        <div>

            <HeaderBg />

           {/*  <!-- scroll up --> */}
            <div class="contentDiv" id="content">
                <button class="back-to-top" type="button"></button>
            </div>
            {/* <!-- back to top end --> */}
            
            
            {/* <!-- preloader --> */}

            {/* <div class="preloader">
                <div class="loader">
                    <div class="loader__figure"></div>
                    <p class="loader__label">Tenplus Digital Labs</p>
                </div>
            </div> */}

            <section class="swan_sidebar-page-container" id="blogarea">
                <div class="swan_auto-container">
                    <div class="row clearfix">
                        <div class="col-lg-8 col-md-12 col-sm-12 content-side">
                            <div class="blog-standard-content">
                                <div class="swan_news-block wow fadeInUp animated animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                    <div class="inner-box">
                                        <figure class="image-box">
                                            <a href="post.html"><img src={NewsImg1} alt="" /></a>
                                            <div class="post-date">
                                                <h4>31</h4>
                                                <p>AUG</p>
                                            </div>
                                        </figure>
                                        <div class="lower-content">
                                            <ul class="post-info clearfix">
                                                <li><i class="far fa-folder-open"></i>Human Resource</li>
                                                <li><i class="far fa-comments"></i><a href="post.html">02 Comments</a></li>
                                            </ul>
                                            <h2><a href="post.html">Get few solutions to hire a best candidate</a></h2>
                                            <p>There are not many of passages of lorem ipsum available alteration in some form. Donec scelerisque dolor id nunc dictum, interdum gravida...</p>
                                            <div class="admin">
                                                <figure class="admin-thumb"><img src={NewsImg2} alt="" /></figure>
                                                <p>by Christine Eve</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="swan_news-block wow fadeInUp animated animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                    <div class="inner-box">
                                        <figure class="image-box">
                                            <a href="post.html"><img src={NewsImg3} alt="" /></a>
                                            <div class="post-date">
                                                <h4>30</h4>
                                                <p>AUG</p>
                                            </div>
                                        </figure>
                                        <div class="lower-content">
                                            <ul class="post-info clearfix">
                                                <li><i class="far fa-folder-open"></i>Human Resource</li>
                                                <li><i class="far fa-comments"></i><a href="post.html">05 Comments</a></li>
                                            </ul>
                                            <h2><a href="post.html">We’re building a new business world</a></h2>
                                            <p>There are not many of passages of lorem ipsum available alteration in some form. Donec scelerisque dolor id nunc dictum, interdum gravida...</p>
                                            <div class="admin">
                                                <figure class="admin-thumb"><img src={NewsImg4} alt="" /></figure>
                                                <p>by Christine Eve</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="swan_news-block wow fadeInUp animated animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                    <div class="inner-box">
                                        <figure class="image-box">
                                        <a href="post.html"><img src={NewsImg5} alt="" /></a>
                                            <div class="post-date">
                                                <h4>29</h4>
                                                <p>AUG</p>
                                            </div>
                                        </figure>
                                        <div class="lower-content">
                                            <ul class="post-info clearfix">
                                                <li><i class="far fa-folder-open"></i>Human Resource</li>
                                                <li><i class="far fa-comments"></i><a href="post.html">08 Comments</a></li>
                                            </ul>
                                            <h2><a href="post.html">Providing the best stuffing solutions</a></h2>
                                            <p>There are not many of passages of lorem ipsum available alteration in some form. Donec scelerisque dolor id nunc dictum, interdum gravida...</p>
                                            <div class="admin">
                                                <figure class="admin-thumb"><img src={NewsImg6} alt="" /></figure>
                                                <p>by Christine Eve</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="swan_news-block wow fadeInUp animated animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                    <div class="inner-box">
                                        <figure class="image-box">
                                            <a href="post.html"><img src={NewsImg7} alt="" /></a>
                                            <div class="post-date">
                                                <h4>28</h4>
                                                <p>AUG</p>
                                            </div>
                                        </figure>
                                        <div class="lower-content">
                                            <ul class="post-info clearfix">
                                                <li><i class="far fa-folder-open"></i>Human Resource</li>
                                                <li><i class="far fa-comments"></i><a href="post.html">03 Comments</a></li>
                                            </ul>
                                            <h2><a href="post.html">Hire easily HR candidates in few seconds</a></h2>
                                            <p>There are not many of passages of lorem ipsum available alteration in some form. Donec scelerisque dolor id nunc dictum, interdum gravida...</p>
                                            <div class="admin">
                                                <figure class="admin-thumb"><img src={NewsImg8} alt="" /></figure>
                                                <p>by Christine Eve</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="swan_pagination-wrapper">
                                    <ul class="swan_pagination clearfix">
                                        <li><a href="blog-2.html"><i class="flaticon-left-arrow"></i></a></li>
                                        <li><a href="blog-2.html" class="current">01</a></li>
                                        <li><a href="blog-2.html">02</a></li>
                                        <li><a href="blog-2.html">03</a></li>
                                        <li><a href="blog-2.html"><i class="flaticon-right-arrow"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-12 col-sm-12 sidebar-side">
                            <div class="blog-sidebar">
                                <div class="sidebar-search">
                                    <form action="#" method="post" class="search-form">
                                        <div class="form-group">
                                            <input type="search" name="search-field" placeholder="Search" required="" />
                                            <button type="submit"><i class="flaticon-magnifying-glass"></i></button>
                                        </div>
                                    </form>
                                </div>
                                <div class="sidebar-widget sidebar-post">
                                    <div class="widget-title">
                                        <h4>Recent Posts</h4>
                                    </div>
                                    <div class="post-inner">
                                        <div class="post">
                                            <figure class="post-thumb"><a href="post.html"><img src={Post1} alt="" /></a></figure>
                                            <span class="post-date">20 Aug, 2020</span>
                                            <h6><a href="post.html">Hire easily HR candidate in few seconds</a></h6>
                                        </div>
                                        <div class="post">
                                            <figure class="post-thumb"><a href="post.html"><img src={Post2} alt="" /></a></figure>
                                            <span class="post-date">19 Aug, 2020</span>
                                            <h6><a href="post.html">Get few solutions to hire a best candidate</a></h6>
                                        </div>
                                        <div class="post">
                                            <figure class="post-thumb"><a href="post.html"><img src={Post3} alt="" /></a></figure>
                                            <span class="post-date">18 Aug, 2020</span>
                                            <h6><a href="post.html">We’re building a new business world</a></h6>
                                        </div>
                                    </div>
                                </div>
                                <div class="sidebar-widget category-widget">
                                    <div class="widget-title">
                                        <h4>Categories</h4>
                                    </div>
                                    <div class="widget-content">
                                        <ul class="category-list clearfix">
                                            <li><a href="post.html">Recruitment</a></li>
                                            <li><a href="post.html">Stuffing Solutions</a></li>
                                            <li><a href="post.html">Improving Resources</a></li>
                                            <li><a href="post.html">Hiring Staff</a></li>
                                            <li><a href="post.html">Business Marketing</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="sidebar-widget tags-widget">
                                    <div class="widget-title">
                                        <h4>Popular Tags</h4>
                                    </div>
                                    <div class="widget-content">
                                        <ul class="tags-list clearfix">
                                            <li><a href="post.html">Recruitment</a></li>
                                            <li><a href="post.html">Stuffing</a></li>
                                            <li><a href="post.html">Business</a></li>
                                            <li><a href="post.html">Solutions</a></li>
                                            <li><a href="post.html">Technology</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
 
export default Blog;