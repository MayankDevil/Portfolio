import '../assets/bootstrap-icons.min.css';
import '../assets/bootstrap.min.css';
import '../assets/bootstrap.bundle.min.js'

import '../App.css'
import '../App.js'

export default function Roadmap() {
  return (
    <section className="" id="roadmap">
            <div className="container">
                
                {/* heading  */}

                <div className="heading py-5">

                    <div className="h3"> <span className="bi bi-map head-icon"></span> Road-Map </div>
                
                    <div className="lead py-2"> A Strategic Roadmap to Achieve Your Pinnacle Goals. </div>
                
                </div>

                <div className="row py-lg-5 py-3 align-items-center">
                    
                    {/* first goal : matric  */}

                    <div className="col-lg-3 col-12">

                        <div className="alert alert-warning lead"> <spna className="bi bi-clipboard2 road-icon"></spna> I completed successfully my 10th standard from Govt Model High School, Vikas Nagar, Chandigarh. After that i am start Computer Basic. </div>

                    </div>

                    {/* arrow */}
                    
                    <div className="col-lg-1 d-lg-block d-none">

                        <div className="d-grid align-items-center text-center h-100">

                            <span className="bi bi-arrow-right popup"></span>
                        
                        </div>

                    </div>
                    
                    {/* second goal : hight school */}

                    <div className="col-lg-3 col-12">

                        <div className="alert alert-success lead"> <spna className="bi bi-clipboard-check road-icon"></spna> I get <span className="bold">IT Skilled Certificate</span> after completed my 12th grade from Government Model Senior Secondary School, Sector-23 A, Chandigarh. Where (Information Technology) IT as my major field of study. </div>

                    </div>
                    
                    {/* arrow */}

                    <div className="col-lg-1 d-lg-block d-none">

                        <div className="d-grid align-items-center text-center h-100">

                            <span className="bi bi-arrow-right popup"></span>
                        
                        </div>

                    </div>
                    
                    {/* third goal : graduate */}

                    <div className="col-lg-3 col-12 ">

                        <div className="alert alert-info lead"> <spna className="bi bi-clipboard-data road-icon"></spna> I am pursuing a <span className="bold">(Bachelor of Computer Applications) BCA degree</span> from Post Graduate Government College, Sector-11, Chandigarh. </div>

                    </div>

                </div>

            </div>
        </section>
  )
}
