import React from "react";
import { useParams } from "react-router-dom";
import Service_data from "../assests/service-data";

const ServiceDetails = () => {
  const { serviceId } = useParams();
  const service = Service_data.find((s) => s.s_no === parseInt(serviceId));
  console.log(serviceId, "coming service");

  if (!service) {
    return <h2>Service not found</h2>;
  }

  return (
    <div className="service-details">
      <h1>{service.s_name}</h1>
      <p>{service.details.intro}</p>

      <div className="service-technologies">
        <h3>Technologies We Use:</h3>
        <ul>
          {service.details.technologies?.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
      </div>

      <div className="service-offerings">
        <h3>What We Offer:</h3>
        <ul>
          {service.details.offerings?.map((offering, index) => (
            <li key={index}>{offering}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ServiceDetails;
