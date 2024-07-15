import React from "react";

function ContactSection() {
  return (
    <div className="contactSection-wrapper">
      <div className="contact-section">
        <div className="contactSection-textContainer">
          <div className="contactText-container">
            <div className="contactText">CONTACT</div>
            <div className="contact-line"></div>
          </div>
          <div className="contact-title">
            <div className="title">
              Questions, Thoughts, Any Suggestions
            </div>
            <div className="title-desc">
              Feel free to contact me by filling out the form below.
            </div>
          </div>
        </div>

        <form className="contact-content" netlify>
          <div className="form-group">
            <div className="form-label">
              <p>Name</p>
            </div>
            <div className="form-input">
              <input type="text" name="name" placeholder="e.g. Guru Patel" />
            </div>
          </div>
          <div className="form-group">
            <div className="form-label">
              <p>Email</p>
            </div>
            <div className="form-input">
              <input type="email" name="email" placeholder="e.g. gurupatel279@gmail.com" />
            </div>
          </div>
          <div className="form-group">
            <div className="form-label">
              <p>Message</p>
            </div>
            <div className="form-input">
              <textarea name="message" placeholder="Write message..." rows="5" />
            </div>
          </div>
          <div className="form-group">
            <div className="btn">
              <button type="submit">
                SEND
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactSection;