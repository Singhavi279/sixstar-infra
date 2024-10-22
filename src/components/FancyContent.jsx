import React from "react";
import indianTruckNoBg2 from "../assets/img/indianTruckNoBg2.png"
import shedImageNoBg from "../assets/img/shedImageNoBg.png"
import BlueCollarImgNoBg from "../assets/img/BlueCollar3NoBg.png"
const FancyContent = ({ id }) => {
    return (
        <>
            <div className="jumbotron jumbotron-fluid feature" id={id}>
                <div className="container my-5">
                    <div className="row justify-content-between text-center text-md-left">
                        <div data-aos="fade-right" data-aos-duration="1000" data-aos-once="false" className="col-md-6">
                            <h2 className="font-weight-bold">Logistics</h2>
                            <p className="my-4">With a fleet of over 100 delivery vehicles & trailers, the division has its own workshop for repairs with a dedicated maintenance team.  We guarantee customers uninterrupted transportation of goods with minimum downtime & operates on a 24/7 shift.

                            </p>
                        </div>
                        <div data-aos="fade-left" data-aos-duration="1000" data-aos-once="false" className="col-md-6 align-self-center">
                            <img src={indianTruckNoBg2} alt="Take a look inside" className="mx-auto d-block" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="jumbotron jumbotron-fluid feature" id="fancyContentLast">
                <div className="container">
                    <div className="row justify-content-between text-center text-md-left">
                        <div data-aos="fade-left" data-aos-duration="1000" data-aos-once="false" className="col-md-6 flex-md-last">
                            <h2 className="font-weight-bold">Warehousing</h2>
                            <p className="my-4">
                                temperature controlled warehousing & storage infrastructure spread over 50,000 sq. metres
                                It is designed to store the products at -30 degrees Celcius to ambient temperatures, with demarcated storage areas for FMCG, Healthcare , homecare, personal care, chocolate, Tobacco, consumer electronics, spare parts, documentation, all under  one roof.
                            </p>
                        </div>
                        <div data-aos="fade-right" data-aos-duration="1000" data-aos-once="false" className="col-md-6 align-self-center flex-md-first">
                            <img src={shedImageNoBg} alt="Safe and reliable" className="mx-auto d-block" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="jumbotron jumbotron-fluid feature" id={id} style={{background: "linear-gradient(348deg, #ffffff 50%, #C5BCB3 0%)",}}>
                <div className="container my-5">
                    <div className="row justify-content-between text-center text-md-left">
                        <div data-aos="fade-right" data-aos-duration="1000" data-aos-once="false" className="col-md-6">
                            <h2 className="font-weight-bold">Manpower Services</h2>
                            <p className="my-4">We provide an an array of function designed to address the workforce needs of organizations.
                                Six Star acts as a mediator between companies and job seekers. We deliver services designed to address the workforce needs of organizations.

                            </p>
                        </div>
                        <div data-aos="fade-left" data-aos-duration="1000" data-aos-once="false" className="col-md-6 align-self-center">
                            <img src={BlueCollarImgNoBg} alt="Take a look inside" className="mx-auto d-block" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default FancyContent