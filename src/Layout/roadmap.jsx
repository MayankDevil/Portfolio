import '../assets/bootstrap-icons.min.css';
import '../assets/bootstrap.min.css';
import '../assets/bootstrap.bundle.min.js'

import '../App.css'
import '../App.js'

export default function Roadmap()
{
    const roadmap_data = [
        {
            icon : "bi bi-clipboard2 road-icon",
            description : ` I completed successfully my 10th standard from Govt Model High School, Vikas Nagar, Chandigarh. After that i am start Computer Basic.`,

        },
        {
            icon : "bi bi-clipboard-check road-icon",
            description : `I get <span className="bold">IT Skilled Certificate</span> after completed my 12th grade from Government Model Senior Secondary School, Sector-23 A, Chandigarh. Where (Information Technology) IT as my major field of study.`,
        },
        {
            icon : "bi bi-clipboard-data road-icon",
            description :`I am pursuing a <span className="bold">(Bachelor of Computer Applications) BCA degree</span> from Post Graduate Government College, Sector-11, Chandigarh.`
        }
    ].map((i) => {
        return (
            <div className="col border-top text-center map">
                        
                <span className="bi bi-check-circle map-icon"></span>

                <div className="alert lead"> <spna className={i.icon}></spna> {i.description} </div>

            </div>
        )
    })

    return (
        <section className="" id="roadmap">
            <div className="container">
                {/* <!-- ( heading ) --> */}
                <div className="heading py-5">

                    <div className="h3"> <span className="bi bi-map head-icon"></span> Road-Map </div>
                
                    <div className="lead py-2"> A Strategic Roadmap to Achieve Your Pinnacle Goals. </div>
                
                </div>

                <div className="row px-md-5 px-4 my-5"> {roadmap_data} </div>

            </div>
        </section>
    )
}