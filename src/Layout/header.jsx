import '../assets/bootstrap-icons.min.css';
import '../assets/bootstrap.min.css';
import '../assets/bootstrap.bundle.min.js'

import img from '../assets/iam.png'

import '../App.css'
import '../App.js'

export default function Header()
{
    return (
        <header className="bg-light border-bottom" id="header">
            <div className="container">
                <div className="row d-flex align-items-center py-5">
                    {/* detail  */}
                    <div className="col-md-6 col-12">
                        
                        <div className="h1 py-3"> I am <a href="https://mastermayank.w3spaces.com" className="display-5 text-decoration-none">  </a>  </div>
                        
                        <div className="lead py-3"> I have a passion for web development and programming. If you have a task that aligns with my abilities, please feel free to reach out. </div>
                        
                        <div className="py-5">

                            <a href="https://github.com/MayankDevil" className="btn btn-dark m-1 px-3"> <span className="bi bi-github"></span> Github </a>
                            
                            <a href="https://www.linkedin.com/in/MasterMayank" className="btn btn-outline-primary m-1 px-3"> <span className="bi bi-linkedin"></span> Linkedin </a>
                            
                            <a href="./data/resume.pdf" className="btn btn-outline-danger m-1 px-3"> <span className="bi bi-file-earmark-pdf"></span> Resume </a>
                            
                        </div>
                        
                    </div>
                    {/* picture */}
                    <div className="col-md-6 col-12">

                        <img src={img} alt="" className="image-fluid w-100 p-lg-5 p-md-4 p-sm-3 popup" id="selfy" />

                    </div>
                    
                </div>
            </div>
        </header>
    )
}