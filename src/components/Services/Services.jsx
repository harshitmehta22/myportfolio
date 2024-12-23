import React from "react";
import './Services.css'
import Service from '../../assests/new.webp'
import Service_data from "../../assests/service-data"
import { Link } from "react-router-dom";

const Services = () => {
    return (
        <>
            <div className="services">
                <div className="services-title">
                    <h1>My Services</h1>
                    {/* <img src={Service} alt="services" /> */}
                </div>
                <div className="services-container">
                    {Service_data && Service_data?.map((service, index) => {
                        return (<div key={index} className="services-format">
                            <h3>{service.s_no}</h3>
                            <h2>{service.s_name}</h2>
                            <p>{service.s_desc}</p>
                            <div className="services-readmore">
                            <Link to={`/services/${service.s_no}`}>
                                <p>Read More</p>
                                <i className="fa-solid fa-arrow-right"></i>
                            </Link>
                            </div>
                        </div>)
                    })}
                </div>
            </div>
        </>
    )
}
export default Services;