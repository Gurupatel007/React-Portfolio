import React from "react";


function LanguagesSection() {
  const languages = [
    { name: "JavaScript", image: "/images/js.svg" },
    { name: "Python", image: "/images/python.svg" },
    { name: "Java", image: "/images/java.svg" },
    { name: "C", image: "/images/c.png" },
    { name: "PHP", image: "/images/php.svg" },
    // Add more languages as needed
  ];

  return (
    <div className="languagesSection-wrapper">
      <div className="languages-section">
        <div className="languagesText-container">
          <div className="languagesText">
            <div className="languages">LANGUAGES</div>
          </div>
          <div className="line"></div>
        </div>
        <div className="languages-content">
          {languages.map((language, index) => (
            <div className="language-card" key={index}>
              <img src={language.image} alt={language.name} className="language-image" />
              <div className="language-name">{language.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LanguagesSection;
