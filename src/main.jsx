import React from 'react'
import ReactDOM from 'react-dom/client'
import Index from './assets/pages/Index.jsx'
import About from './assets/pages/About.jsx'
import Service from './assets/pages/Service.jsx'
import Blog from './assets/pages/Blog.jsx'
import Singl from './assets/pages/Single.jsx'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './css/style.css'
import './css/animate.min.css'
import './css/bootstrap.min.css'
import './css/flaticon.css'
import './css/gijgo.css'
import './css/magnific-popup.css'
import './css/nice-select.css'
import './css/owl.carousel.min.css'
import './css/slick.css'
import './css/slicknav.css'
import './css/theme-default.css'
// import './css/style.map'
// import './css/theme-default.map'
import './css/themify-icons.css'
import Portfolio from './assets/pages/Portfolio.jsx'
import Contact from './assets/pages/contact.jsx'





const container=ReactDOM.createRoot(document.getElementById('root'))
container.render(
  <BrowserRouter>
  <Routes>
      <Route path='/' Component={Index} />
      <Route path='/About' Component={About} />
      <Route path='/services' Component={Service} />
      <Route path='/blog' Component={Blog} />
      <Route path='/single-blog' Component={Singl} />
      <Route path='/portfolio' Component={Portfolio} />
      <Route path='/contact' Component={Contact} />
  </Routes>
</BrowserRouter>
)
