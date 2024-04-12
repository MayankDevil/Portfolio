import '../assets/bootstrap-icons.min.css';
import '../assets/bootstrap.min.css';
import '../assets/bootstrap.bundle.min.js'

import '../App.css'
import '../App.js'

import developer_image from '../../public/iam.png'
import resume from '../../public/resume.pdf'

export default function Header()
{
    return (
        <header class="bg-light border-bottom" id="header">
            <div class="container">
                <div class="row d-flex align-items-center py-5">
                    
                    {/* <!-- ( detail ) --> */}
                    <div class="col-md-6 col-12 pt-5">
                        
                        <div class="h1 py-3"> I am <a href="https://mastermayank.w3spaces.com" class="display-5 text-decoration-none">  </a>  </div>
                        
                        <div class="lead py-3"> I have a passion for web development and programming. If you have a task that aligns with my abilities, please feel free to reach out. </div>
                        
                        <div class="py-5">

                            <a href="https://github.com/MayankDevil" class="btn btn-dark m-1 px-sm-3 px-2"> <span class="bi bi-github"></span> Github </a>
                            
                            <a href="https://www.linkedin.com/in/MasterMayank" class="btn btn-outline-primary m-1 px-sm-3 px-2"> <span class="bi bi-linkedin"></span> Linkedin </a>
                            
                            <a href={resume} class="btn btn-outline-danger m-1 px-sm-3 px-2"> <span class="bi bi-file-earmark-pdf"></span> Resume </a>
                            
                        </div>
                        
                    </div>

                    {/* <!-- ( picture ) --> */}
                    <div class="col-md-6 col-12">

                        <img src={developer_image} alt="" class="image-fluid w-100 p-lg-5 p-md-4 p-sm-3 popup" id="selfy" />

                    </div>
                    
                </div>
            </div>
        </header>
    )
}