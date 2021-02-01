import React from "react";

export default function Root(props) {
  return (
    <header style={{ marginTop: "15px" }} className="masthead mb-auto">
        <div className="inner row">
          <a className="blog-logo col-md-3" href="/">
            <img style={{ width: "85px" }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3Kv26zZ_peIXkHeDHgNNmLSjZr8R7nTsGNA&usqp=CAU"
              alt="Logo"
            />{" "}
          </a>
          <nav className="nav nav-masthead justify-content-left col-md-9">
            <a
              className={`nav-link ${location.pathname === "/" && "active"}`}
              href="/"
            >
              Home
            </a>
            <a
              className={`nav-link ${
                location.pathname === "/about" && "active"
              }`}
              href="/about"
            >
              About Us
            </a>
          </nav>
        </div>
      </header>
  );
}
