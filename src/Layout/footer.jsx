import '../assets/bootstrap-icons.min.css';
import '../assets/bootstrap.min.css';
import '../assets/bootstrap.bundle.min.js'

import '../App.css'
import '../App.js'

export default function Footer()
{
    return (
        <footer className="" id="footer">
            <div className="container">
                <div className="row py-md-5 border-top">

                    <div className="col-md-6 col-12 py-3"> <span className="text-primary">&copy;</span> Developed | Designed by <a href="https://mastermayank.w3spaces.com" className="text-blue" id="developer"> Mayank </a> </div>
                
                    <div className="col-md-6 col-12 py-3 text-md-end">
                        <a href="https://github.com/MayankDevil" className="btn btn-outline-dark  bi bi-github"></a>
                        <a href="https://www.linkedin.com/in/MasterMayank" className="btn btn-outline-primary  bi bi-linkedin"></a>
                    </div>

                </div>
            </div>
        </footer>
    )
}
