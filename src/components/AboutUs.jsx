import React from 'react'
import truck from "../assets/img/truck.svg"
import warehouse from "../assets/img/warehouse.svg"
import idCard from "../assets/img/id card.svg"
export const AboutUs = ({id}) => {
    return (
        <div className="container my-5 py-2" id={id}>
            <h2 className="text-center font-weight-bold my-5">Partnership Approach with our valued clients</h2>
            <div className="row">
                <div data-aos="fade-up" data-aos-delay="0" data-aos-duration="1000" data-aos-once="false" className="col-md-4 text-center" style={{}}>
                    <img src={truck} alt="Anti-spam" className="mx-auto" />
                        <h4>Trusted Drivers</h4>
                        {/* <p>Lorem ipsum dolor sit amet porro his no his deleniti
                        Et usu ocurreret elaboraret doctus prodesse assueverit.
                        </p> */}
                </div>
                <div data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000" data-aos-once="false" className="col-md-4 text-center">
                    <img src={warehouse} alt="Phishing Detect" className="mx-auto"/>
                        <h4>State of the art warehouse</h4>
                        {/* <p>Ne error antiopam usu. Sed vocen concludaturque ea
                        Et usu ocurreret elaboraret doctus prodesse assueverit.
                        </p> */}
                </div>
                <div data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000" data-aos-once="false" className="col-md-4 text-center">
                    <img src={idCard} alt="Smart Scan" className="mx-auto"/>
                        <h4>Certified Helpers</h4>
                        {/* <p>Et usu ocurreret elaboraret doctus prodesse assueverit.
                        Et usu ocurreret elaboraret doctus prodesse assueverit.
                        </p> */}
                </div>
            </div>
        </div>
    )
}
