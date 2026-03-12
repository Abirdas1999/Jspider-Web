import React from "react";
import { Link, NavLink } from "react-router-dom";

function Footer() {
	return (
		<>
			<footer style={{ background: "#061812" }} className="text-white pt-5">
				{/* Top Section */}
				<div className="container">
					<div className="row">
						{/* Branding - col-2 */}
						<div className="col-md-2 mb-4">
							<Link to="/" className="text-warning text-decoration-none fw-bold fs-4">
								MyApp
							</Link>
							<p className="text-secondary mt-3 small">
								Modern shopping experience with premium products.
							</p>
						</div>

						{/* Section 1 */}
						<div className="col-md-4 mb-4 text-center">
							<h5 className="mb-3">Home</h5>
							<ul className="list-unstyled">
								<li className="mb-2">
									<Link to="/" className="text-secondary text-decoration-none">
										Home
									</Link>
								</li>
								<li className="mb-2">
									<Link
										to="/about"
										className="text-secondary text-decoration-none"
									>
										About
									</Link>
								</li>
							</ul>
						</div>

						{/* Section 2 */}
						<div className="col-md-3 mb-4 text-center">
							<h5 className="mb-3">Company</h5>
							<ul className="list-unstyled">
								<li className="mb-2">
									<Link
										to="/contact"
										className="text-secondary text-decoration-none"
									>
										Contact
									</Link>
								</li>
								<li className="mb-2">
									<Link
										to="/support"
										className="text-secondary text-decoration-none"
									>
										Support
									</Link>
								</li>
							</ul>
						</div>

						{/* Section 3 */}
						<div className="col-md-3 mb-4 text-center">
							<h5 className="mb-3">Legal</h5>
							<ul className="list-unstyled">
								<li className="mb-2">
									<Link
										to="/privacy"
										className="text-secondary text-decoration-none"
									>
										Privacy Policy
									</Link>
								</li>
								<li className="mb-2">
									<Link
										to="/terms"
										className="text-secondary text-decoration-none"
									>
										Terms & Conditions
									</Link>
								</li>
							</ul>
						</div>
					</div>

					{/* Bottom Copyright */}
					<div className="border-top py-4 mt-3 text-center text-secondary small">
						© 2025 MyApp. All Rights Reserved.
					</div>
				</div>
			</footer>
		</>
	);
}

export default Footer;
