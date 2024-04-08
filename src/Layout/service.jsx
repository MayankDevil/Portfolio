import '../assets/bootstrap-icons.min.css';
import '../assets/bootstrap.min.css';
import '../assets/bootstrap.bundle.min.js'

import '../App.css'
import '../App.js'

export default function Service()
{
    return (
        <section className="" id="service">
            <div className="container">
                
                {/* heading  */}

                <div className="heading py-5">
                
                    <div className="h3"> <span className="bi bi-star head-icon"></span> Expertise that serve </div>
                
                    <div className="lead py-2"> Crafting Solutions, Exceeding Expectations: Our Commitment to Exceptional Service. </div>
                
                </div>

                <div className="row py-5">
                    
                    {/* service 1 : web developement */}

                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="border rounded p-3 my-3 serve">

                            <div className="text-center py-2">

                                <span className="bi bi-bar-chart service-icon"></span>
                                
                                <div className="h4 text-dark py-3 "> Web Development </div>
                            
                            </div>

                            <div className="p-2">

                                <div className="text-secondary py-2"> <span className="bi bi-check-circle"></span> Fornt End Web Development </div>

                                <div className="text-secondary py-2"> <span className="bi bi-check-circle"></span> Back End Data Connectivity </div>

                                <div className="text-secondary py-2"> <span className="bi bi-check-circle"></span> Responsive Layout </div>

                                <div className="text-secondary py-2"> <span className="bi bi-check-circle"></span> Designed Website </div>

                                <div className="text-secondary py-2"> <span className="bi bi-check-circle"></span> Secuirty CheckSet </div>

                                <div className="text-secondary py-2"> <span className="bi bi-check-circle"></span> Redesigned Webpage </div>

                            </div>

                        </div>
                    </div>
                    
                    {/* service 2 : software programming */}

                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="border rounded p-3 my-3 serve">

                            <div className="text-center py-2">

                                <span className="bi bi-laptop service-icon"></span>
                                
                                <div className="h4 text-dark py-3"> Software Programming </div>
                            
                            </div>

                            <div className="p-2">

                                <div className="text-secondary py-2"> <span className="bi bi-check-circle"></span> GUI Layout by Java only </div>

                                <div className="text-secondary py-2"> <span className="bi bi-check-circle"></span> Debbuging Program </div>

                                <div className="text-secondary py-2"> <span className="bi bi-check-circle"></span> Build Functionality </div>

                                <div className="text-secondary py-2"> <span className="bi bi-check-circle"></span> Data Structure Algorithm Knowledge </div>

                                <div className="text-secondary py-2"> <span className="bi bi-check-circle"></span> Java DataBase Connectivity </div>

                                <div className="text-secondary py-2"> <span className="bi bi-x-circle"></span> Networking </div>

                            </div>
                        
                        </div>
                    </div>
                    
                    {/* service 3 : database management */}

                    <div className="col-lg-4 col-md-6 col-12">
                        <div className=" border rounded p-3 my-3 serve">


                            <div className="text-center py-2">

                                <span className="bi bi-server service-icon"></span>
                                
                                <div className="h4 text-dark py-3"> Database Management </div>
                            
                            </div>

                            <div className="p-2">

                                <div className="text-secondary py-2"> <span className="bi bi-check-circle"></span> Database Designed </div>
                                
                                <div className="text-secondary py-2"> <span className="bi bi-check-circle"></span> DataBase Connectivity </div>

                                <div className="text-secondary py-2"> <span className="bi bi-check-circle"></span> DataBase Filtering </div>

                                <div className="text-secondary py-2"> <span className="bi bi-check-circle"></span> Manage Data as API </div>

                                <div className="text-secondary py-2"> <span className="bi bi-check-circle"></span> I provide efficient queries </div>

                                <div className="text-secondary py-2"> <span className="bi bi-x-circle"></span> Maintenance forever  </div>

                            </div>

                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}