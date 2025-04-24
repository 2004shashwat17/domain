import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
       {/* Story Section */}
       <section className="story-section">
        <h2>Our Story</h2>
        <p>
          Founded in [Year], FireGames was born out of a passion for using technology to bring joy and support to children facing various challenges. Our team of dedicated professionals, including educators, healthcare experts, and game developers, came together with a shared vision: to create a platform where games serve as a tool for both entertainment and therapeutic support.
        </p>
      </section>
      {/* Mission Section */}
      <section className="mission-section">
        <h2>Our Mission</h2>
        <p>
          At FireGames, we believe in the power of play to make a difference. Our mission is to create engaging, inclusive, and fun gaming experiences that promote the well-being and development of children, especially those with special needs. We aim to blend entertainment with education, ensuring that every child has the opportunity to grow, learn, and thrive through our innovative games.
        </p>
      </section>

      {/* Goals Section */}
      <section className="goals-section">
        <h2>Our Goals</h2>
        <ul>
          <li>Empower Children: To empower children with disabilities by providing accessible and fun games that cater to their unique needs.</li>
          <li>Promote Health & Well-being: To develop games that encourage physical activity, mental stimulation, and emotional well-being.</li>
          <li>Innovate Continuously: To constantly innovate and improve our platform, incorporating the latest research and technology to better serve our users.</li>
          <li>Expand Accessibility: To make our games available to children worldwide, regardless of their physical or geographical limitations.</li>
        </ul>
      </section>

      {/* Stakeholders Section */}
      <section className="stakeholders-section">
        <h2>Key Stakeholders</h2>
        <p>Team Leader : [Ujjawal Kumar]</p>
        <p>Healthcare Partners: [WHO (World Health Organization)]</p>
        <p>Educational Advisors: [IES(Indian Educational Services)]</p>
        <p>Technical Team: [Shashwat Saxena(Devloper)/Vibhor Jain & Sohani(AI Expert)/Ronit & Palak Sharma(Designers&Researcher)]</p>
      </section>

      {/* Commitment Section */}
      <section className="commitment-section">
        <h2>Our Commitment</h2>
        <p>
          We are committed to creating a safe, inclusive, and supportive environment for every child who uses our platform. Our games are designed with input from experts in child development, ensuring that they are not only fun but also beneficial for the physical and mental health of our young users.
        </p>
      </section>

      {/* Looking Ahead Section */}
      <section className="looking-ahead-section">
        <h2>Looking Ahead</h2>
        <p>
          As we continue to grow, we are excited to expand our offerings, introduce new games, and collaborate with more partners. Our future plans include:
        </p>
        <ul>
          <li>Developing New Games: Focusing on different aspects of child development, including cognitive skills, physical coordination, and social interaction.</li>
          <li>Global Outreach: Reaching out to international communities to make our games accessible to more children around the world.</li>
          <li>Research & Development: Collaborating with research institutions to study the impact of gaming on child health and use the findings to enhance our products.</li>
        </ul>
      </section>

      {/* Join Us Section */}
      <section className="join-us-section">
        <h2>Join Us</h2>
        <p>
          We invite you to join us on this journey. Whether you are a parent, educator, or healthcare professional, your feedback and support are invaluable as we strive to create the best possible experience for our users.
        </p>
      </section>
    </div>
  );
};

export default About;
