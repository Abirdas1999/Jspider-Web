import React from "react";
import { Outlet } from "react-router-dom";

export default function Service() {
  const services = [
    "Web Development",
    "App Development",
    "UI/UX Design",
    "Digital Marketing",
    "Technical Support",
  ];

  return (
    <>
      <h1>Our Services</h1>

      <ul>
        {services.map((service, index) => (
          <li key={index}>{service}</li>
        ))}
      </ul>
      <div className="row">
        <div className="col-3">
          <Link to="settings" />
          <h3>Setting</h3>
        </div>
      </div>
      <div className="col-3">
        <Link to="profile" />
        <h3>Profile</h3>
      </div>
      <section className="container">
        <div className="row">
          <div className="col-6 m-auto">
            <Outlet />
          </div>
        </div>
      </section>
    </>
  );
}
