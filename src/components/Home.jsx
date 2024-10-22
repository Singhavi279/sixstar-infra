import React from 'react'
import SixStarLogo from "../assets/img/Six-Star-Logo-NoBg.png"
import WarehouseSixStarInfraOverlay from "../assets/img/WarehouseSixStarInfraOverlay.png"
const Home = ({ id }) => {
    return (
        <div className="jumbotron jumbotron-fluid" id={id} style={{ width: "100%", height: "auto", backgroundImage: `url(${WarehouseSixStarInfraOverlay})`, backgroundRepeat: 'no-repeat', objectFit: 'contain', backgroundSize: "cover" }}>
            <div className="container text-center text-md-left">
                <header>
                    <div className="row justify-content-center"  >
                        <div className="col-4 d-flex justify-content-center">
                            <img src={SixStarLogo} alt="logo" />
                        </div>

                    </div>
                    <div className="row justify-content-center " >
                        <a href="#fancyContent" className="nav-link text-white lead" style={{ scrollBehavior: "smooth",textDecoration: 'underline' }}>Read more</a>
                    </div>
                </header>
                <h1 data-aos="fade" data-aos-easing="linear" data-aos-duration="1000" data-aos-once="true" className="display-3 text-white font-weight-bold my-5">
                    <br />
                    One stop<br />
                    support for your<br /> Business
                </h1>
                <p data-aos="fade" data-aos-easing="linear" data-aos-duration="1000" data-aos-delay="400" data-aos-once="true" className="lead text-black my-4" style={{ color: "#6E2A1A", fontWeight: "bold" }}>
                    We at Six Star Infra Solutions Pvt Ltd<br />
                    take pride in serving businesses from different industries<br />
                    and having unique requirements <br /> based on the
                    scale of their operations.
                </p>
                <a href="#contactus" data-aos="fade" data-aos-easing="linear" data-aos-duration="1000" data-aos-delay="1600" data-aos-once="true" className="btn my-4 font-weight-bold atlas-cta cta-blue">Register!</a>
            </div>
        </div>
    )
}
export default Home;