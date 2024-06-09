import React from "react";
import aboutImage from "../../assets/pointism.png";
import htmlIcon from "../../assets/html.png";
import cssIcon from "../../assets/css.png";
import jsIcon from "../../assets/javascript.png";
import figmaIcon from "../../assets/figma.png";
import postgresqlIcon from "../../assets/postgresql.png";
import luaIcon from "../../assets/lua.png";
import phpIcon from "../../assets/php.png";
import reactIcon from "../../assets/react.png";
import sassIcon from "../../assets/sass.png";
import bootstrapIcon from "../../assets/bootstrap.png";

const AboutMe = () => {
  return (
    <section className="about-me">
      <h2>About Me</h2>
      <img className="about-image" src={aboutImage} alt="About me" />
      <p>
        Hello! I'm a passionate web developer with a love for creating
        functional, easy-to-use websites. I'm always eager to take on new
        challenges and learn new technologies.
      </p>
      <div className="technologies-section">
        <div className="technology">
          <p>HTML</p>
          <img src={htmlIcon} alt="HTML" className="technology-icon" />
        </div>
        <div className="technology">
          <p>CSS</p>
          <img src={cssIcon} alt="CSS" className="technology-icon" />
        </div>
        <div className="technology">
          <p>JavaScript</p>
          <img src={jsIcon} alt="JavaScript" className="technology-icon" />
        </div>
        <div className="technology">
          <p>Figma</p>
          <img src={figmaIcon} alt="Figma" className="technology-icon" />
        </div>
        <div className="technology">
          <p>PostGreSQL</p>
          <img
            src={postgresqlIcon}
            alt="PostGreSQL"
            className="technology-icon"
          />
        </div>
        <div className="technology">
          <p>Lua</p>
          <img src={luaIcon} alt="Lua" className="technology-icon" />
        </div>
        <div className="technology">
          <p>PHP</p>
          <img src={phpIcon} alt="PHP" className="technology-icon" />
        </div>
        <div className="technology">
          <p>React</p>
          <img src={reactIcon} alt="React" className="technology-icon" />
        </div>
        <div className="technology">
          <p>Sass</p>
          <img src={sassIcon} alt="Sass" className="technology-icon" />
        </div>
        <div className="technology">
          <p>Bootstrap</p>
          <img src={bootstrapIcon} alt="Sass" className="technology-icon" />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
