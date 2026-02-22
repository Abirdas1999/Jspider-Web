import React from "react";
import { Link } from "react-router-dom";

function Home() {

    return (
        <>
            <div
                className="container-fluid d-flex flex-column justify-content-center align-items-center"
                style={{
                    backgroundColor: "#174736",
                    height: "80vh",
                }}
            >
                <h1 className="text-light mb-4">Welcome to Home Page</h1>


                <Link className="btn  px-4 mt-3" style={{backgroundColor: "#ffb703"}} to="/services">Go to Service</Link>
            </div>
        </>
    );
}

export default Home;