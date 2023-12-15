import React from 'react';
import { Link } from 'react-scroll';

export default function HeroSection() {




  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Yogesh</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Full Stack</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
          I work with a cool set of technologies to create awesome websites and web applications.
      
          </p>
          <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="MyPortfolio"
                className="text-md"
              >
              <button className="btn btn-primary" >Project</button>
              </Link>
          
        </div>
      </div>
    </section>
  );
}
