import './assets/bootstrap-icons.min.css';
import './assets/bootstrap.min.css';
import './assets/bootstrap.bundle.min.js'

import Aside from './Layout/aside.jsx'
import Header from './Layout/header.jsx'
import Footer from './Layout/footer.jsx'
import Achievement from './Layout/achievement.jsx'
import Roadmap from './Layout/roadmap.jsx'
import Service from './Layout/service.jsx'
import Testimonial from './Layout/testimonial.jsx'
import Contact from './Layout/contact.jsx'

import './App.css'
import './App.js'


export default function App() {
  return (
    <main className="container-fluid" id="main">
  
        <Aside />
  
        <Header />

        <Achievement />

        <Roadmap />

        <Service />

        <Testimonial />

        <Contact />

        <Footer />
  
    </main>
  )
}
// the end