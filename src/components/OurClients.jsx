import React from 'react'
import EastmanLogo from "../assets/img/EastmanNoBG.png"
import AdaniP_LLogoNoBg from "../assets/img/AdaniP_LLogoNoBg.png"
import AlbertDavidLogo from "../assets/img/AlbertDavidLogoNoBg.png"
import MahindraAcceloLogo from "../assets/img/MahindraAcceloLogoNoBg.png"
import ActionTesaLogo from "../assets/img/ActionTesaLogoNoBg.png"
import GodrejPhilipCompanyLogo from "../assets/img/GodrejPhilipCompanyLogoNoBg.png"


export const OurClients = ({id}) => {
    return (
        <div className="jumbotron jumbotron-fluid" id={id}>
            <div className="container">
                <div className="row">
                    <div className="col-sm-4 col-md-2 py-2 align-self-center">
                        <img src={EastmanLogo} className="mx-auto d-block"/>
                    </div>
                    <div className="col-sm-4 col-md-2 py-2 align-self-center">
                        <img src={AdaniP_LLogoNoBg} className="mx-auto d-block"/>
                    </div>
                    <div className="col-sm-4 col-md-2 py-2 align-self-center">
                        <img src={GodrejPhilipCompanyLogo} className="mx-auto d-block"/>
                    </div>
                    <div className="col-sm-4 col-md-2 py-2 align-self-center">
                        <img src={AlbertDavidLogo} className="mx-auto d-block"/>
                    </div>
                    <div className="col-sm-4 col-md-2 py-2 align-self-center">
                        <img src={MahindraAcceloLogo} className="mx-auto d-block"/>
                    </div>
                    <div className="col-sm-4 col-md-2 py-2 align-self-center">
                        <img src={ActionTesaLogo} className="mx-auto d-block"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
