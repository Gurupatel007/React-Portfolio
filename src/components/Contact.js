import React from "react";
function ContactSection() {
  return (
    <div className="contactSection-wrapper">
      <div className="contact-section">
        <div className="contactText-container">
          <div className="contactText">
            <div className="contact">CONTACT</div>
          </div>
          <div className="line"></div>
        </div>
        <div className="contact-title">
          <div className="title">
            <p>Questions, Thoughts, Any Suggestions</p>
          </div>
          <div className="title-desc">
            <p>Feel free to contact me by filling out the form below.</p>
          </div>
        </div>
        <div className="contact-content">
          <div className="form-group">
            <div className="form-label">
              <p>Name</p>
            </div>
            <div className="form-input">
              <input type="text" placeholder="e.g. Guru Patel" />
            </div>
          </div>
          <div className="form-group">
            <div className="form-label">
              <p>Email</p>
            </div>
            <div className="form-input">
              <input type="email" placeholder="e.g. gurupatel279@gmail.com" />
            </div>
          </div>
          <div className="form-group">
            <div className="form-label">
              <p>Message</p>
            </div>
            <div className="form-input">
              <textarea placeholder="Write message..." rows="5"/>
            </div>
          </div>
          <div className="form-group">
              <div className="btn">
                <a href="mailto:gurupatel279@gmail.com">
                  SEND
                </a>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
