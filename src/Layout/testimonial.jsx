import '../assets/bootstrap-icons.min.css'
import '../assets/bootstrap.min.css'
import '../assets/bootstrap.bundle.min.js'

import '../App.css'
import '../App.js'

import client1 from '../../public/client/vipin.jpeg'
import client2 from '../../public/client/uday.jpeg'
import client3 from '../../public/client/alisha.png'


export default function Testimonial()
{

    const client_data = [
        {
            name : "Vipin",
            img : client1,
            comment : "I enlisted Mayank's expertise to create my college practical Java website project, and I am extremely pleased with the final result.",
            url : "https://github.com/VipinBoy/JavaWeb"
        },
        {
            name : "Uady",
            img : client2,
            comment : "I sought Mayank's assistance for my project and was impressed by the excellent work he delivered.",
            url : "https://github.com/Udaybisht124/udayfinalwebsite"
        },
        {
            name : "Alisha",
            img : client1,
            comment : "He is a skilled developer who significantly contributed to enhancing my personal portfolio.",
            url : "https://github.com/AlsiahBeg/AlishaBeg"
        }
    ].map((i) => {
        return(
            <div className="col-lg-4 col-md-6 col-sm-12 text-center p-sm-5 p-2">

                <img src={i.img} alt="" className="image-fluid w-75 client-image" />

                <div className=" text-dark py-5">
                    <span className="qoute"> " </span> {i.comment} <span className="qoute"> " </span>
                </div>

                <a href={i.url} className="btn btn-outline-dark w-100"> {i.name} </a>

            </div>
        )
    })

    return (
        <section className="" id="testimonial">
            <div className="container">
                {/* <!-- ( heading ) --> */}
                <div className="heading py-5">

                    <div className="h3"> <span className="bi bi-chat-left-quote head-icon"></span> Testimonial </div>
                
                    <div className="lead py-2"> Curious to hear what people think about me. </div>
                
                </div>

                <div className="row py-5">
            
                    {client_data}

                </div>

            </div>
        </section>
    )
}