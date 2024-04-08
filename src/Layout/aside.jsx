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
                    {/* <!--website title*/}
                    <a className="navbar-brand" href="" id="brand">Portfolio</a>
                    {/* navbar toggle button */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    {/* navbar anchor */}
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <div className="navbar-nav w-100 d-flex justify-content-end">
                            
                            <div className="nav-item"><a className="nav-link active" aria-current="page" href="#header"> <span className="bi bi-person-fill"></span> About Me </a></div>
                            
                            <div className="nav-item"> <a className="nav-link" href="#achievement"> <span className="bi bi-award-fill"></span> Achievement </a> </div>
                            <div className="nav-item"> <a className="nav-link" href="#roadmap"> <span className="bi bi-map-fill"></span> RoadMap </a> </div>
                            <div className="nav-item"> <a className="nav-link" href="#service"> <span className="bi bi-star-fill"></span> Expertise </a> </div>
                            <div className="nav-item"> <a className="nav-link" href="#testimonial"> <span className="bi bi-chat-left-quote-fill"></span> Testimonial </a> </div>
                            <div className="nav-item"> <a className="nav-link" href="#contact"> <span className="bi bi-link-45deg"></span> Contact </a> </div>
                            
                        </div>
                    </div>
                </nav>

            </div>
        </aside>
    )
}