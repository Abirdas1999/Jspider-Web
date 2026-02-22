import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Services() {
    return (
        <>
            <div
                className="container-fluid d-flex flex-column justify-content-center align-items-center"
                style={{
                    backgroundColor: "#174736",
                    height: "80vh",
                }}
            >
                <h1 className="text-light mb-4">Services</h1>

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 d-flex justify-content-center gap-3 mt-4">
                            <Link className="btn px-4" style={{backgroundColor: "#ffb703"}} to="products">
                                Products
                            </Link>

                            <Link className="btn px-4" style={{backgroundColor: "#ffb703"}} to="setting">
                                Setting
                            </Link>
                        </div>
                    </div>
                </div>


            </div>
            <div className="container mt-5">
                <Outlet />
            </div>
        </>
    )
}

export default Services