
import {Link} from 'react-router-dom'



function Header(){
    return(
        <>
      <div className="header-area ">
                <div id="sticky-header" className="main-header-area">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-xl-3 col-lg-2">
                                <div className="logo">
                                    <a href="/">
                                    <h2 className=' text-white'>Eric Yeboah</h2>
                                    </a>
                                </div>
                                
                            </div>
                            <div className="col-xl-6 col-lg-7">
                                <div className="main-menu  d-none d-lg-block">
                                    <nav>
                                        <ul id="navigation">
                                            <li><a className="active" href="/">home</a></li>
                                            <li><a href="/about">About</a></li>
                                            <li><a href="/services">Services</a></li>
                                            <li><a href="#">blog <i className="ti-angle-down"></i></a>
                                                <ul className="submenu">
                                                    <li><a href="/blog">blog</a></li>
                                                    <li><a href="/single-blog">single-blog</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="#">pages <i className="ti-angle-down"></i></a>
                                                <ul className="submenu">
                                                    <li><a href="/portfolio">Portfolio</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="/contact">Contact</a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 d-none d-lg-block">
                                <div className="Appointment">
                                    <div className="book_btn d-none d-lg-block">
                                        <a  href="#">Contact Me</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="mobile_menu d-block d-lg-none"></div>
                            </div>
                        </div>
    
                    </div>
                </div>
            </div>
                   
  
        </>
    )
 }

 export default Header ;