import { NavLink } from "react-router-dom";

export const About = () => {

  return (
    <>
      <section className="section-about container">
        <h2 className="container-title">
          Welcome, Here’s Why You Should Choose Us
        </h2>
        <div className="gradient-cards">
          <div className="card">
            <div className="container-card bg-blue-box">
              <p className="card-title">Expertise</p>
              <p>
                Our team consists of experienced IT professionals who are
                passionate about staying up-to-date with the latest industry
                trends.
              </p>
            </div>
          </div>

          <div className="card">
            <div className="container-card bg-blue-box">
              <p className="card-title">Customization</p>
              <p>
                We understand that every business is unique. That’s why we
                create solutions tailored to your specific needs and goals.
              </p>
            </div>
          </div>

          <div className="card">
            <div className="container-card bg-blue-box">
              <p className="card-title">Customer-Centric Approach</p>
              <p>
                We prioritize your satisfaction and provide top-notch support to
                address your IT concerns.
              </p>
            </div>
          </div>

          <div className="card">
            <div className="container-card bg-blue-box">
              <p className="card-title">Affordability</p>
              <p>
                We offer competitive pricing without compromising the quality of
                our services.
              </p>
            </div>
          </div>

          <div className="card">
            <div className="container-card bg-blue-box">
              <p className="card-title">Reliability</p>
              <p>
                Count on us to be there when you need us. We are committed to
                ensuring your IT environment is reliable and available 24/7.
              </p>
            </div>
          </div>
        </div>
        <div className="btn btn-group">
          <NavLink to="/contact">
            <button className="btn">Connect Now</button>
          </NavLink>
          <NavLink to="/service">
            <button className="btn secondary-btn">Learn More</button>
          </NavLink>
        </div>
      </section>
    </>
  );
};
