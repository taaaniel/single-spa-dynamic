import React from "react";

export default function Root(props) {
  return (
    <section>
      <div className="homepage-hero" style={{ margin: "5rem 0" }}>
        <img
          style={{ width: "100%" }}
          src="https://www.rapidvaluesolutions.com/wp-content/uploads/2020/06/Blog-Image-100.jpg"
        />
      </div>
      <h1 className="cover-heading">Welcome to the micro-frontend world!</h1>
      <p className="lead">
        This is an example of how powerful micro-frontends can be!
        <br /> You may integrate all of your frontend apps, regardless of what
        frameworks they're built with.
      </p>
      <div>
      </div>
    </section>
  );
}
