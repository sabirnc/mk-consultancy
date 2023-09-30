import { useState } from "react";
import { Service } from "./service";
import "../css/services.css";

export const Services = () => {

  return (
    <section className="services-container">
      <h2 className="service-header">Our Services</h2>

      <div className="service-container">
        <Service name={"Lifestyles"} />
        <Service name={"Rent"} />
        <Service name={"Sell"}/>
      </div>
    </section>
  );
};
