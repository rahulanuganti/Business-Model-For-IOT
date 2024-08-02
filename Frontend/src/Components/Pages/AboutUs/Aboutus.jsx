import React from 'react';
import './Aboutus.css'; 
import Header from '../../Header/Header';

const Aboutus = () => {
  return (
    <>
      <Header />
      <div className="about-us">
        <h1>About Us</h1>
        
        <section className="company-overview">
          <h2>Company Overview</h2>
          <p>
            Welcome to our IoT business model project! We specialize in showcasing a wide range of IoT products, designed to enhance connectivity and automation in various sectors.
          </p>
          <p>
            Our mission is to provide comprehensive solutions that leverage the power of IoT to create smarter, more efficient environments.
          </p>
        </section>

        <section className="mission-statement">
          <h2>Our Mission</h2>
          <p>
            Our mission is to lead the IoT revolution by delivering innovative products that transform the way we live and work. We aim to provide high-quality, reliable IoT solutions that meet the needs of our customers.
          </p>
        </section>

        <section className="team-members">
          <h2>Meet Our Team</h2>
          <div className="team-member">
            <h3>Vivek</h3>
            <p>Backend Developer</p>
          </div>
          <div className="team-member">
            <h3>Rahul</h3>
            <p>Frontend Developer (React)</p>
          </div>
          <div className="team-member">
            <h3>Manohar</h3>
            <p>Database Specialist</p>
          </div>
          <div className="team-member">
            <h3>Tharun</h3>
            <p>Handling and Operations</p>
          </div>
        </section>

        <section className="achievements">
          <h2>Our Achievements</h2>
          <ul>
            <li>Developed a comprehensive IoT product catalog</li>
            <li>Implemented seamless integration between backend and frontend</li>
            <li>Achieved high levels of data security and reliability</li>
          </ul>
        </section>

        <section className="testimonials">
          <h2>What Our Customers Say</h2>
          <blockquote>
            "The IoT solutions provided by this team have significantly improved our operational efficiency."
            <cite> - A Satisfied Customer</cite>
          </blockquote>
          <blockquote>
            "Innovative products and excellent support. Highly recommend!"
            <cite> - Another Happy Client</cite>
          </blockquote>
        </section>

        <section className="community-involvement">
          <h2>Community Involvement</h2>
          <p>
            We are committed to contributing to the community by engaging in various initiatives and supporting local organizations.
          </p>
        </section>

        <section className="contact-info">
          <h2>Contact Us</h2>
          <p>Email: teaminfi@gmail.com</p>
          <p>Phone: (123) 456-7890</p>
          <p>Address: vadodara, Parul University</p>
        </section>
      </div>
    </>
  );
};

export default Aboutus;
