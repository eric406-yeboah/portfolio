import Header from "../components/header";
import Footer from "../components/footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';




function Index(){
    return(
        <>
        <Header/>
        
      <div className="slider_area">
        <div className="single_slider  d-flex align-items-center slider_bg_1">
            <div className="shap_pattern d-none d-lg-block">
                <img src="src/img/about/grid.png" alt=""/>
            </div>
            <div className="social_links">
                <ul>
                    <li><a href="#"> <i className="fa fa-facebook"></i> </a></li>
                    <li><a href="#"> <i className="fa fa-twitter"></i> </a></li>
                    <li><a href="#"> <i className="fa fa-instagram"></i> </a></li>
                </ul>
            </div>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-12">
                        <div className="slider_text text-center">
                            <h3>
                                Hello This is Eric
                            </h3>
                            <span>Software Developer</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="service_area">
        <div className="container">
            <div className="row">
                <div className="col-xl-12">
                    <div className="section_title text-center mb-65">
                        <span>Service Provided</span>
                        <h3>Build brands campaigns  <br/>
                                & digital projects</h3>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-4 col-md-4">
                    <div className="single_service text-center">
                        <div className="icon">
                            <img src="src/img/svg_icon/1.svg" alt=""/>
                        </div>
                        <h3>Graphic design</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.</p>
                    </div>
                </div>
                <div className="col-xl-4 col-md-4">
                    <div className="single_service text-center">
                        <div className="icon">
                            <img src="src/img/svg_icon/2.svg" alt=""/>
                        </div>
                        <h3>Web design</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.</p>
                    </div>
                </div>
                <div className="col-xl-4 col-md-4">
                    <div className="single_service text-center">
                        <div className="icon">
                            <img src="src/img/svg_icon/3.svg" alt=""/>
                        </div>
                        <h3>Mobile app</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
   
    <div className="portfolio_area portfolio_bg_1">
        <div className="container">
            <div className="row">
                <div className="col-xl-12">
                    <div className="section_title white_text text-center">
                        <span>Portfolios</span>
                        <h3>Some of my awesome <br/>
                                stuffs here</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
   
    <div className="portfolio_image_area">
        <div className="container">
            <div className="row">
                <div className="col-xl-5 col-md-5">
                    <div className="single_Portfolio">
                        <div className="portfolio_thumb">
                            <img src="src/img/portfolio/1.png" alt=""/>
                        </div>
                        <a href="img/portfolio/1.png" className="popup popup-image"></a>
                        <div className="portfolio_hover">
                            <div className="title">
                                    <h3>Product Design</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-7 col-md-7">
                    <div className="single_Portfolio">
                        <div className="portfolio_thumb">
                            <img src="src/img/portfolio/2.png" alt=""/>
                        </div>
                        <a href="img/portfolio/2.png" className="popup popup-image"></a>
                        <div className="portfolio_hover">
                            <div className="title">
                                    <h3>Product Design</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-md-6 col-lg-4">
                    <div className="single_Portfolio">
                        <div className="portfolio_thumb">
                            <img src="src/img/portfolio/3.png" alt=""/>
                        </div>
                        <a href="img/portfolio/3.png" className="popup popup-image"></a>
                        <div className="portfolio_hover">
                            <div className="title">
                                    <h3>Product Design</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-md-6 col-lg-4">
                    <div className="single_Portfolio">
                        <div className="portfolio_thumb">
                            <img src="src/img/portfolio/4.png" alt=""/>
                        </div>
                        <a href="img/portfolio/4.png" className="popup popup-image"></a>
                        <div className="portfolio_hover">
                            <div className="title">
                                    <h3>Product Design</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-md-12 col-lg-4">
                    <div className="single_Portfolio">
                        <div className="portfolio_thumb">
                            <img src="src/img/portfolio/5.png" alt=""/>
                        </div>
                        <a href="img/portfolio/5.png" className="popup popup-image"></a>
                        <div className="portfolio_hover">
                            <div className="title">
                                    <h3>Product Design</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-12">
                    <div className="more_portfolio text-center">
                        <a className="line_btn" href="#">More Folio</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
   
    <div className="about_me">
        <div className="about_large_title d-none d-lg-block">
                About
        </div>
        <div className="container">
            <div className="row align-items-center">
                <div className="col-xl-6 col-md-6">
                    <div className="about_e_details">
                        <h3>About me</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida Risus com odo viverra maecenas.</p>
                        <div className="download_cv">
                            <a className="boxed-btn3" href="#">Download CV</a>
                        </div>
                    </div>
                </div>
                <div className="col-xl-6 col-md-6">
                    <div className="about_img">
                        <div className="color_pattern d-none d-lg-block">
                            <img src="src/img/about/color_grid.png" alt=""/>
                        </div>
                        <div className="my_Pic">
                                <img src="src/img/about/about.png" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  

    <div className="counter_area">
        <div className="container">
            <div className="row">
                <div className="col-xl-4 col-md-4">
                    <div className="single_counter text-center">
                        <h3>
                            <span className="counter" >520 </span><span>+</span>
                        </h3>
                        <p>Total Projects</p>
                    </div>
                </div>
                <div className="col-xl-4 col-md-4">
                    <div className="single_counter text-center">
                        <h3>
                            <span className="counter">244 </span>
                        </h3>
                        <p>On Going Projects</p>
                    </div>
                </div>
                <div className="col-xl-4 col-md-4">
                    <div className="single_counter text-center">
                        <h3>
                            <span className="counter" >95 </span> <span>%</span>
                        </h3>
                        <p>Job Success</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
   
    <div className="testimonial_area ">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="testmonial_active owl-carousel">
                            <div className="single_carousel">
                                    <div className="single_testmonial text-center">
                                            <div className="quote">
                                                <img src="src/img/testmonial/quote.svg" alt=""/>
                                            </div>
                                            <p>Donec imperdiet congue orci consequat mattis. Donec rutrum porttitor <br/> 
                                                    sollicitudin. Pellentesque id dolor tempor sapien feugiat ultrices nec sed neque.  <br/>
                                                    Fusce ac mattis nulla. Morbi eget ornare dui. </p>
                                            <div className="testmonial_author">
                                                <div className="thumb">
                                                        <img src="src/img/testmonial/thumb.png" alt=""/>
                                                </div>
                                                <h3>Robert Thomson</h3>
                                                <span>Business Owner</span>
                                            </div>
                                        </div>
                            </div>
                            <div className="single_carousel">
                                    <div className="single_testmonial text-center">
                                            <div className="quote">
                                                <img src="src/img/testmonial/quote.svg" alt=""/>
                                            </div>
                                            <p>Donec imperdiet congue orci consequat mattis. Donec rutrum porttitor <br/> 
                                                    sollicitudin. Pellentesque id dolor tempor sapien feugiat ultrices nec sed neque.  <br/>
                                                    Fusce ac mattis nulla. Morbi eget ornare dui. </p>
                                            <div className="testmonial_author">
                                                <div className="thumb">
                                                        <img src="src/img/testmonial/thumb.png" alt=""/>
                                                </div>
                                                <h3>Robert Thomson</h3>
                                                <span>Business Owner</span>
                                            </div>
                                        </div>
                            </div>
                            <div className="single_carousel">
                                    <div className="single_testmonial text-center">
                                            <div className="quote">
                                                <img src="src/img/testmonial/quote.svg" alt=""/>
                                            </div>
                                            <p>Donec imperdiet congue orci consequat mattis. Donec rutrum porttitor <br/> 
                                                    sollicitudin. Pellentesque id dolor tempor sapien feugiat ultrices nec sed neque.  <br/>
                                                    Fusce ac mattis nulla. Morbi eget ornare dui. </p>
                                            <div className="testmonial_author">
                                                <div className="thumb">
                                                        <img src="src/img/testmonial/thumb.png" alt=""/>
                                                </div>
                                                <h3>Robert Thomson</h3>
                                                <span>Business Owner</span>
                                            </div>
                                        </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
    
    <div className="discuss_projects">
        <div className="container">
            <div className="row">
                <div className="col-xl-12">
                    <div className="project_text text-center">
                        <h3>Let’s discuss for a project</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor <br/> incididunt ut labore et dolore magna aliqua.</p>
                        <a className="boxed-btn3" href="#">Start Talking</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Footer/>
    </>
    )
}

export default Index;