import React, { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'



export const ContactUs = ({ id }) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: 0,
        personType: "worker",
        jobType: "",
        worker: false,
        logistics: false,
        warehousing: false,
        query: "",
    })
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target
        console.log(name, value, type, checked)
        setFormData((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }))

    }
    const handleSubmit = async (e) => {
        console.log("Secret", import.meta.env.VITE_SCRIPT_URI)
        e.preventDefault()
        const appsScriptUrl = import.meta.env.VITE_SCRIPT_URI
        const searchQuery = new URLSearchParams(formData).toString()
        try {
            const response = await fetch(`${appsScriptUrl}?${searchQuery}`, {
                method: 'POST',
                mode: 'no-cors'
            });
            console.log(`The response is given by `, response)
            toast.success(' Successfully posted on google sheet ', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
        catch (e) {
            console.log(`The error is given by`, e.message)
        }
    }
    return (
        <>
        <div className="jumbotron jumbotron-fluid" id={id} style={{ backgroundColor: "#6E2A1A" }}>
            <div className="container my-5">
                <div className="row justify-content-between">
                    <div className="col-md-6 text-white">
                        <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                            <h2 className="font-weight-bold">Contact Us</h2>
                            <p className="my-4 ">
                                SHOP NO. 4, BHARAT DHARAM KANTA <br/>
                                OPP. RAJA RANI FARM HOUSE <br/>
                                GT ROAD LALKUAN GHAZIABAD UTTAR PRADESH <br/>
                                201009
                            </p>
                            <ul className="list-unstyled">
                                <li ><span style={{fontWeight: "bold"}}>Email:</span>{" "}
                                     <a href='mailto:abhaya.kumar@starispl.com' style={{color:'white',fontStyle: "italic"}}>abhaya.kumar@starispl.com</a>,{" "}
                                    <a href='mailto:Pramod.yadav@starispl.com' style={{color:'white',fontStyle: "italic"}}>Pramod.yadav@starispl.com</a></li>,{" "}
                                    <a href='mailto:shailesh@starispl.com' style={{color:'white',fontStyle: "italic"}}>shailesh@starispl.com</a>
                                <li><span style={{fontWeight: "bold"}}>Phone :</span>
                                    <a href='tel:+919811132865' style={{color:'white',fontStyle: "italic"}}>+91-9811132865</a>, {" "}
                                    <a href='tel:+919205203378' style={{color:'white',fontStyle: "italic"}}>+91-9205203378</a>, {" "}
                                    <a href='tel:+918840419107' style={{color:'white',fontStyle: "italic"}}>+91-8840419107</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-6" >
                        <h2 className="font-weight-bold text-white">Register</h2>

                        <form>
                            <div className="row" >
                                <div className="form-check  text-white " style={{ marginLeft: "3%" }}>
                                    <input className="form-check-input" style={{ position: "relative", margin: 0, padding: 0 }} type="radio" name="personType" id="inlineRadio1" value="worker" onChange={handleChange} />
                                    <label className="form-check-label" style={{ paddingLeft: "0.6rem" }} htmlFor="inlineRadio1">Worker</label>
                                </div>
                                <div className="form-check text-white " style={{ marginLeft: "4%" }}>
                                    <input className="form-check-input" style={{ position: "relative", margin: 0, padding: 0 }} type="radio" name="personType" id="inlineRadio2" value="client" onChange={handleChange} />
                                    <label className="form-check-label" style={{ paddingLeft: "0.6rem" }} htmlFor="inlineRadio2">Client</label>
                                </div>

                            </div>
                            <div className="row">

                                <div className="form-group col-md-6 text-white">
                                    <label htmlFor="name" >Your Name</label>
                                    <input type="name" name="name" value={formData.name} placeholder="Please enter your name here" onChange={handleChange} className="form-control" id="name" required />
                                </div>
                                {/* <div className="form-group col-md-6 text-white">
                                    <label htmlFor="email" >Your Email</label>
                                    <input type="email" name="email" value={formData.email} onChange={handleChange} className="form-control" id="Email" />
                                </div> */}
                                <div className="form-group col-md-6 text-white">
                                    <label htmlFor="phone" >Your Phone number</label>
                                    <input type="tel" name="phone" value={formData.phone} placeholder="Please enter your phoneNumber here" onChange={handleChange} className="form-control" id="phone" pattern="[0-9]{10}"
                                        maxLength={10} required />
                                </div>
                            </div>
                            <div className="form-group text-white">
                                {formData.personType === "worker"
                                    ? (
                                        <>
                                            <label htmlFor='selectProfession'>Select your job type</label>
                                            <select className="form-control" id="selectProfession" onChange={handleChange} name="jobType" value={formData.jobType} required>
                                                <option value="driver">Driver</option>
                                                <option value="loader">Loader</option>
                                                <option value="logistics">Logistics</option>
                                            </select>
                                        </>
                                    )
                                    :
                                    (
                                        <>
                                            <div className="row" >
                                                <div className="form-check  text-white " style={{ marginLeft: "3%" }}>
                                                    <input className="form-check-input" style={{ position: "relative", margin: 0, padding: 0 }} type="checkbox" name="worker" id="inlineRadio1" value={formData.worker} onChange={handleChange} />
                                                    <label className="form-check-label" style={{ paddingLeft: "0.6rem" }} htmlFor="inlineRadio1">Worker</label>
                                                </div>
                                                <div className="form-check text-white " style={{ marginLeft: "4%" }}>
                                                    <input className="form-check-input" style={{ position: "relative", margin: 0, padding: 0 }} type="checkbox" name="warehousing" id="inlineRadio2" value={formData.warehousing} onChange={handleChange} />
                                                    <label className="form-check-label" style={{ paddingLeft: "0.6rem" }} htmlFor="inlineRadio2">Warehousing</label>
                                                </div>
                                                <div className="form-check text-white " style={{ marginLeft: "4%" }}>
                                                    <input className="form-check-input" style={{ position: "relative", margin: 0, padding: 0 }} type="checkbox" name="logistics" id="inlineRadio2" value={formData.logistics} onChange={handleChange} />
                                                    <label className="form-check-label" style={{ paddingLeft: "0.6rem" }} htmlFor="inlineRadio2">Logistics</label>
                                                </div>

                                            </div>
                                            <label htmlFor="query">Query</label>
                                            <textarea name="query" value={formData.query} placeholder="Please enter your query here" onChange={(e) => handleChange(e)} className="form-control" id="message" rows="3"></textarea>
                                        </>
                                    )}
                            </div>
                            <button type="submit" className="btn font-weight-bold atlas-cta atlas-cta-wide cta-blue my-3" onClick={(e) => handleSubmit(e)}>Submit</button>

                        </form>
                    </div>
                </div>
            </div>
            
        </div>
        <div style={{display: 'flex', justifyContent: 'center', backgroundColor: "#C5BCB3"}}>SIX STAR INFRA SOLUTIONS PVT. LTD.</div>
        </>
    )
}
