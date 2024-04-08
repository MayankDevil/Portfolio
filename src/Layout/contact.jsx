import '../assets/bootstrap-icons.min.css';
import '../assets/bootstrap.min.css';
import '../assets/bootstrap.bundle.min.js'

import '../App.css'
import '../App.js'

export default function Contact()
{
    return (
        <section classNameName="" id="contact">
            <div className="container">
                
                {/* heading  */}

                <div className="heading py-5">

                    <div className="h3"> <span className="bi bi-link-45deg head-icon"></span> Connect To Me </div>
                
                    <div className="lead py-2"> Lorem ipsum dolor sit amet consectetur adipisicing. </div>
                
                </div>

                <div className="row py-5">
                    <div className="container">
                        
                        {/* form container  */}

                        <form action="#" className="">
                            <div className="row">
                                
                                {/* username field  */}
                                <div className="col-lg-4 col-md-6 col-12 form-group py-3">
                                    <input type="text" name="username" id="" placeholder="Your Good Name" className="form-control" />
                                </div>
                                
                                {/* email field  */}
                                <div className="col-lg-4 col-md-6 col-12 form-group py-3">
                                    <input type="email" name="email" id="" placeholder="Your Email Id" className="form-control" />
                                </div>
                                
                                {/* subject field  */}
                                <div className="col-lg-4 col-12 form-group py-3">
                                    <input type="text" name="subject" id="" placeholder="Subject" className="form-control" />
                                </div>
                                
                                {/* content field  */}
                                <div className="col-12 form-group py-3">
                                    <textarea name="content" id="" rows="10" placeholder="Type Message" className="form-control"></textarea>
                                </div>

                                {/* button  */}
                                <div className="col-md-4 col-12 col- py-3">
                                    <input type="submit" value="Send Message" className="btn btn-block btn-success" />
                                </div>

                                <div className="col-lg-8 col-12 col- py-3 text-end">
                                    <a href="https://github.com/MayankDevil" className="btn btn-dark px-3"> <span className="bi bi-github"></span> Github </a>
                                    <a href="https://www.linkedin.com/in/MasterMayank" className="btn btn-primary px-3"> <span className="bi bi-linkedin"></span> Linkedin </a>
                                </div>
                                
                
                            </div>
                        </form>

                    </div>
                </div>

            </div>
        </section>
    )
}