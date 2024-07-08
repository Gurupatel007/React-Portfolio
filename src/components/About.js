import React from "react";
import '../App.css';

function AboutSection() {
  return (
    <div className="aboutSection-wrapper">
      <div className="about-section">
        <div className="aboutText-container">
          <div className="aboutText">
            <div className="about">ABOUT ME</div>
          </div>
          <div className="line"></div>
        </div>
        <div className="about-title">
          <div className="title">
            <p>Who I am?</p>
          </div>
          <div className="title-desc">
            <p>I'm a Software developer and here is my portfolio website. Here you'll learn about my journey as a software developer.</p>
          </div>
        </div>
        <div className="about-para">
            <p className="para">Hey there! I'm <span className="about-name">Guru Patel</span>, a passionate student at Ganpat University -  U. V. Patel College of Engineering, on a mission to become a top-notch  software engineer. For over 2.5 years, I've been deeply immersed in  coding, with a focus on tackling tough problems and bringing ideas to  life using the MERN stack.</p>

              <div className="downloadCv-btn">
                <a href="/pdfs/MyResume.pdf" target="_blank" rel="noreferrer" download>Download CV</a>
              </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
