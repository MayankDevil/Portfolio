import '../assets/bootstrap-icons.min.css';
import '../assets/bootstrap.min.css';
import '../assets/bootstrap.bundle.min.js'

import '../App.css'
import '../App.js'

export default function Aside()
{
    return (
        <aside className="bg-dark position-fixed w-100" id="navbar">
            <div className="container">

                <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-0">
                    
                    {/* <!-- ( website title ) --> */}
                    <a className="navbar-brand" href="" id="brand">Portfolio</a>

                    {/* <!-- ( navbar toggle button ) --> */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    
                    {/* <!-- ( navbar anchor ) --> */}
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <div className="navbar-nav w-100 d-flex justify-content-end">
                            
                            <div className="nav-item"><a className="nav-link" href="#header">  About Me </a></div>
                            
                            <div className="nav-item"> <a className="nav-link" href="#achievement"> Achievement </a> </div>
                            <div className="nav-item"> <a className="nav-link" href="#roadmap"> RoadMap </a> </div>
                            <div className="nav-item"> <a className="nav-link" href="#service"> Expertise </a> </div>
                            <div className="nav-item"> <a className="nav-link" href="#testimonial"> Testimonial </a> </div>
                            
                        </div>
                    </div>
                </nav>

            </div>
        </aside>
    )
}