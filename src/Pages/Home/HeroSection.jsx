import CV from "../../../assets/HarshalVaidya_Resume.pdf";

export default function HeroSection() {
  const linkedInUrl = "https://www.linkedin.com/in/harshal-vaidya/";

  const handleClick = () => {
    window.open(linkedInUrl, "_blank");
  };
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Harshal</p>
          <h1 className="hero--section--title">
            <span className="hero--section--title--color">Software</span>
            <br />
            Developer
          </h1>
          <p className="hero--section--description">
            A dedicated and results-driven software engineer with over four
            years of industry experience and a passion for learning and
            building.
            <br />
            Seeking opportunities with teams that prioritize collaboration and
            creative problem-solving in shaping impactful, growing products.
          </p>
        </div>
        <div className="hero--section--contact--button">
          <button className="btn btn-primary" onClick={handleClick}>
            Get in Touch
          </button>
          <a download="" href={CV} className="btn btn-primary">
            Download CV
          </a>
        </div>
      </div>
      <div className="hero--section--img">
        <img src="./img/LinkedInCopy.jpg" alt="Hero Section" />
      </div>
    </section>
  );
}
