import '../assets/bootstrap-icons.min.css'
import '../assets/bootstrap.min.css'
import '../assets/bootstrap.bundle.min.js'

import '../App.css'
import '../App.js'

export default function Service()
{
    const service_data = [
        {
            icon : "bi bi-bar-chart service-icon",
            title : "Web Development",
            offer : [
                "Front end development",
                "Back end data Connectivity",
                "Responsive Layout",
                "Design Website",
                "Security Checkset",
                "Redesigned Webpage"
            ]
        },
        {
            icon : "bi bi-laptop service-icon",
            title : "Software Programming",
            offer : [
                "GUI Layout with Java",
                "Debbuging Program",
                "Build Functionality",
                "Data Structure Algorithm Knowledge",
                "Java Database Connectivity",
                "Networking"
            ]
        },
        {
            icon : "bi bi-server service-icon",
            title : "Database Management",
            offer : [
                "Database Desgined",
                "Database Connectivity",
                "Database Filtering",
                "Mange Data as API",
                "I provide efficient queries",
                "Maintenance forever"
            ]
        }
    ]
    
    const services_layout = service_data.map((i) => {
        return (
            <div className="col-lg-4 col-md-6 col-12">
                <div className="border rounded p-3 my-3 serve">

                    <div className="text-center py-2">

                        <span className={i.icon}></span>
                        
                        <div className="h4 text-dark py-3 "> {i.title} </div>
                    
                    </div>

                    <div className="p-2">

                        {i.offer.map((o, index) => {
                            
                            if ((index == 5 && i.title != "Web Development") || (index == 3 && i.title == "Database Management"))
                            {
                                return (
                                    <div className="text-secondary py-2"> <span className="bi bi-x-circle"></span> {o} </div>
                                )
                            }
                            else
                            {
                                return (
                                    <div className="text-secondary py-2"> <span className="bi bi-check-circle"></span> {o} </div>
                                )
                            }
                        })}

                    </div>

                </div>
            </div>
        )
    })

    

    return (
        <section className="" id="service">
            <div className="container">
                {/* <!-- ( heading ) --> */}
                <div className="heading py-5">
                
                    <div className="h3"> <span className="bi bi-star head-icon"></span> Expertise that serve </div>
                
                    <div className="lead py-2"> Crafting Solutions, Exceeding Expectations: Our Commitment to Exceptional Service. </div>
                
                </div>

                <div className="row py-5"> { services_layout } </div>

            </div>
        </section>
    )
}