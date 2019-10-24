import React from "react";
import("../assets/scss/main.scss");

export default () => (
  <div id="bg-img" className="container">
    <header>
      <div className="menu-btn">
        <div className="btn-line"></div>
        <div className="btn-line"></div>
        <div className="btn-line"></div>
      </div>

      <nav className="menu">
        <div className="menu-branding">
          <div className="portrait"></div>
        </div>
        <ul className="menu-nav">
          <li className="nav-item current">
            <a href="index.html" className="nav-link">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="about.html" className="nav-link">
              About Me
            </a>
          </li>
          <li className="nav-item">
            <a href="work.html" className="nav-link">
              My Work
            </a>
          </li>
          <li className="nav-item">
            <a
              href="https://thuanqh.netlify.com"
              target="_blank"
              className="nav-link"
            >
              My Blog
            </a>
          </li>
          <li className="nav-item">
            <a
              href="https://thuanqh.netlify.com/service/"
              target="_blank"
              className="nav-link"
            >
              My Services
            </a>
          </li>
          <li className="nav-item">
            <a href="contact.html" className="nav-link">
              How To Reach Me
            </a>
          </li>
        </ul>
      </nav>
    </header>

    <main id="home">
      <h1 className="lg-heading">
        Jason
        <span className="text-secondary">Quach</span>
      </h1>
      <h2 className="sm-heading">
        Software Craftsman, Creator, Author, Mentor, Angle Investor &
        Entrepreneur
      </h2>
      <div className="icons">
        <a href="https://www.linkedin.com/in/thuanqh/">
          <i className="fab fa-linkedin fa-2x"></i>
        </a>
        <a href="https://github.com/thuanqh">
          <i className="fab fa-github fa-2x"></i>
        </a>
        <a href="https://medium.com/@jasonqh">
          <i className="fab fa-medium fa-2x"></i>
        </a>
        <a href="https://twitter.com/huuthuan">
          <i className="fab fa-twitter fa-2x"></i>
        </a>
        <a href="https://www.facebook.com/thuanqh">
          <i className="fab fa-facebook fa-2x"></i>
        </a>
      </div>
    </main>
  </div>
);
