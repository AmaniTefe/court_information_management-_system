import React from "react";
import { useState, useEffect } from "react";
import "../style/about.css";
import Footer from "../components/Footer";

const About = () => {
  const [activeSection, setActiveSection] = useState("mission");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setActiveSection(activeSection === "mission" ? "vission" : "mission");
    }, 10000); // Adjust the delay (in milliseconds) as needed

    return () => clearTimeout(timeout);
  }, [activeSection]);
  return (
    <>
      <section className="about">
        <h1>About Us</h1>
        <p style={{ fontWeight: "bold" }}>Wolkite primary court</p>
        <div className="about-info">
          <div className="about-img">
            <img
              src="https://cdn.pixabay.com/photo/2015/08/21/13/28/courtroom-898931_1280.jpg"
              alt="court info"
            />
          </div>
          <div className="visionmission">
            <div
              className={`mission ${
                activeSection === "mission" ? "active" : "hidden"
              }`}
            >
              <h3>Our mission</h3>
              <p>
                The mission of the court is to uphold the principles of justice,
                fairness, and the rule of law by providing a forum for the
                resolution of legal disputes. Through the diligent application
                of laws and legal precedents, the court seeks to ensure equal
                access to justice, protect individual rights, and maintain
                societal order. The court is committed to adjudicating cases
                with impartiality, integrity, and transparency, fostering public
                trust and confidence in the legal system. By promoting the
                peaceful resolution of disputes and safeguarding the rights of
                all individuals, the court strives to contribute to the overall
                well-being and stability of the community it serves.
              </p>
            </div>
            <div
              className={`vission ${
                activeSection === "vission" ? "active" : "hidden"
              }`}
            >
              <h3>Our vission</h3>
              <p>
                The mission of the court is to uphold the principles of justice,
                fairness, and the rule of law by providing a forum for the
                resolution of legal disputes. Through the diligent application
                of laws and legal precedents, the court seeks to ensure equal
                access to justice, protect individual rights, and maintain
                societal order. The court is committed to adjudicating cases
                with impartiality, integrity, and transparency, fostering public
                trust and confidence in the legal system. By promoting the
                peaceful resolution of disputes and safeguarding the rights of
                all individuals, the court strives to contribute to the overall
                well-being and stability of the community it serves.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="team">
        <h1>Meet Our Team</h1>
        <div className="team-cards">
          {/* Cards here */}
          {/* Card 1 */}
          <div className="card">
            <div className="card-img">
              <img
                src="https://media.geeksforgeeks.org/wp-content/uploads/20230824122630/business-office-business-woman-professional.jpg"
                alt="User 1"
              />
            </div>
            <div className="card-info">
              <h2 className="card-name">Jane</h2>
              <p className="card-role">CEO and Founder</p>
              <p className="card-email">jane@example.com</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="card">
            <div className="card-img">
              <img
                src="https://media.geeksforgeeks.org/wp-content/uploads/20230822183347/man-portrait-businessman-male.jpg"
                alt="User 2"
              />
            </div>
            <div className="card-info">
              <h2 className="card-name">Miller</h2>
              <p className="card-role">Co-Founder</p>
              <p className="card-email">Miller@example.com</p>
            </div>
          </div>
          {/* Card 3 */}
          <div className="card">
            <div className="card-img">
              <img
                src="https://media.geeksforgeeks.org/wp-content/uploads/20230824122630/business-office-business-woman-professional.jpg"
                alt="User 3"
              />
            </div>
            <div className="card-info">
              <h2 className="card-name">Joe</h2>
              <p className="card-role">Co-Founder</p>
              <p className="card-email">Joe@example.com</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default About;
