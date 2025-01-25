import { NavLink } from "react-router-dom";
import { Analytics } from "../UI/Analytics";

export const HeroSection = () => {
  return (
    <>
      {/* First Hero Section */}
      <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              <h1>Welcome to Health Hub</h1>
              <p>
                Are you ready to take your business to the next level with
                cutting-edge IT solutions? Look no further! At Health Hub, we
                specialize in providing innovative IT services and solutions
                tailored to meet your unique needs.
              </p>
              <div className="btn btn-group">
                <NavLink to="/contact">
                  <button className="btn">connect now</button>
                </NavLink>
                <NavLink to="/service">
                  <button className="btn secondary-btn">learn more</button>
                </NavLink>
              </div>
            </div>

            {/* Hero Image */}
            <div className="hero-image">
              <img
                src="/images/home.jpg"
                alt="coding together"
                width="400"
                height="500"
              />
            </div>
          </div>
        </section>
      </main>

      {/* Analytics Section */}
      <Analytics />

      {/* Second Hero Section */}
      <section className="section-hero">
        <div className="container grid grid-two-cols">
          {/* Hero Image */}
          <div className="hero-image">
            <img
              src="/images/design.jpg"
              alt="coding together"
              width="400"
              height="500"
            />
          </div>

          <div className="hero-content">
            <p>We are here to help you</p>
            <h1>Get Started Today</h1>
            <p>
              Ready to take the first step towards a more efficient and secure
              Health Care Data Management Solution? Contact us today for a free
              consultation and let’s discuss how the Health Hub Product can help
              your business thrive in the digital age.
            </p>
            <div className="btn btn-group">
              <NavLink to="/contact">
                <button className="btn">connect now</button>
              </NavLink>
              <NavLink to="/service">
                <button className="btn secondary-btn">learn more</button>
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
