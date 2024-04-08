import '../assets/bootstrap-icons.min.css';
import '../assets/bootstrap.min.css';
import '../assets/bootstrap.bundle.min.js'

import client3 from '../assets/client/alisha.png'
import client2 from '../assets/client/uday.jpeg'
import client1 from '../assets/client/vipin.jpeg'

import '../App.css'
import '../App.js'

export default function Testimonial()
{
    return (
        <section className="" id="testimonial">
            <div className="container">
                
                {/* heading */}

                <div className="heading py-5">

                    <div className="h3"> <span className="bi bi-chat-left-quote head-icon"></span> Testimonial </div>
                
                    <div className="lead py-2"> Curious to hear what people think about me. </div>
                
                </div>

                <div className="row py-5">
                    
                    {/* 1 : person */}

                    <div className="col-lg-4 col-md-6 col-sm-12 text-center p-sm-5 p-2">

                        <img src={client1} alt="" className="image-fluid w-75 client-image" />

                        <div className=" text-dark py-5">
                            <span className="qoute"> " </span>
                            I enlisted Mayank's expertise to create my college practical Java website project, and I am extremely pleased with the final result.
                            <span className="qoute"> " </span>
                        </div>

                        <a href="https://github.com/VipinBoy/JavaWeb" className="btn btn-outline-dark w-100"> Vipin </a>

                    </div>
                    
                    {/* 2 : person */}

                    <div className="col-lg-4 col-md-6 col-sm-12 text-center  p-sm-5 p-2">

                        <img src={client2} alt="" className="image-fluid w-75 client-image" />

                        <div className="text-dark py-5">
                            <span className="qoute">"</span>
                            I sought Mayank's assistance for my project and was impressed by the excellent work he delivered.
                            <span className="qoute">"</span>
                        </div>

                        <a herf="https://github.com/Udaybisht124/udayfinalwebsite" className="btn btn-outline-dark w-100"> Uday </a>

                    </div>
                    
                    {/* 3 : person */}

                    <div className="col-lg-4 col-md-6 col-sm-12 text-center  p-sm-5 p-2">

                        <img src={client3} alt="" className="image-fluid w-75 client-image" />

                        <div className="text-dark py-5">
                            <span className="qoute"> " </span>
                            He is a skilled developer who significantly contributed to enhancing my personal portfolio.
                            <span className="qoute"> " </span>
                        </div>

                        <a href="https://github.com/AlishaBeg/AlishaBeg" className="btn btn-outline-dark w-100"> Alisha </a>

                    </div>

                </div>

            </div>
        </section>
    )
}