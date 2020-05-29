import React from 'react';

import Layout from '../components/Layout';

// import { Link } from 'gatsby';
import Sidebar from '../components/Sidebar';
import config from '../../config';
const IndexPage = () => (
  <Layout>
    <Sidebar />
    <div className="container-fluid p-0">
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="about"
      >
        <div className="w-100">
          <h1 className="mb-0">
            {config.firstName}
            <span className="text-primary">{config.lastName}</span>
          </h1>
          <div className="subheading mb-5">
            {config.address} · {config.phone} ·
            <a href={`mailto:${config.email}`}>{config.email}</a>
          </div>
          <p className="lead mb-5">
            An enthusiastic engineering fresher who is a self-starter and
            capable to use technical skills for the betterment of the
            organization. Iterative approaches to corporate strategy foster
            collaborative thinking to further the overall value proposition.
          </p>
          <div className="social-icons">
            {config.socialLinks.map(social => {
              const { icon, url } = social;
              return (
                <a key={url} href={url}>
                  <i className={`fab ${icon}`} />
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex justify-content-center"
        id="experience"
      >
        <div className="w-100">
          <h2 className="mb-5">PROJECTS</h2>



          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Web-app for Calculator</h3>
              <p>
                Created a webapp for a simple calculator as a project while
                learning JS.
                <a href="https://samcalci.netlify.app/">
                  <i class="fas fa-external-link-square-alt" />
                </a>
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">April 2020 - April 2020</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">UI for a Expense-app</h3>
              <p>
                Created a UI for a expense calculator web app. It add the
                purchased item in the list and show the total expenditure in
                return. We can as many as item we want or delete from the list
                with a single click.
                <a href="https://uiexpense.netlify.app/">
                  <i class="fas fa-external-link-square-alt" />
                </a>
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">April 2020 - April 2020</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Billing System</h3>
              <p>
                This system basically used to calculate the change and also
                calculate the total transaction of the day of each product. It
                was done by using JAVA.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">
                February 2020 - February 2020
              </span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
              <h3 className="mb-0">Book Review Website</h3>
              <p>
                This website is especially designed for book lovers. In this we
                can give or read the review of a book. Currently this website is
                under progress. In this we are using HTML,CSS,JS and PHP.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">May 2020 - Present</span>
            </div>
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="education"
      >
        <div className="w-100">
          <h2 className="mb-5">Education</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Galgotias University</h3>
              <div className="subheading mb-3">Bachelor of Technology</div>
              <div>Computer Science and Engineering</div>
              <p>CGPA: 8.33</p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">July 2017 - June 2021</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
              <h3 className="mb-0">Kendriya Vidyalaya</h3>
              <div className="subheading mb-3">Senior Secondary</div>
              <p>CGPA: 8.27</p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">April 2016 - March 2017</span>
            </div>
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="skills"
      >
        <div className="w-100">
          <h2 className="mb-5">Skills</h2>

          <div className="subheading mb-3">
            Programming Languages &amp; Tools
          </div>
          <ul className="list-inline dev-icons">
            <li className="list-inline-item">
              <i class="fab fa-python" />
            </li>
            <li className="list-inline-item">
              <i class="fab fa-java" />
            </li>
            <li className="list-inline-item">
              <i className="fab fa-html5" />
            </li>
            <li className="list-inline-item">
              <i className="fab fa-css3-alt" />
            </li>
            <li className="list-inline-item">
              <i className="fab fa-angular" />
            </li>
            <li className="list-inline-item">
              <i className="fab fa-react" />
            </li>
          </ul>

          <div className="subheading mb-3">Workflow</div>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-check" />
              Responsive Design
            </li>
            <li>
              <i className="fa-li fa fa-check" />
              Code Debugging
            </li>
            <li>
              <i className="fa-li fa fa-check" />
              Playing with data &amp; Understand it
            </li>
          </ul>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="interests"
      >
        <div className="w-100">
          <h2 className="mb-5">Interests</h2>
          <p>
            Apart from being a coder and student, I enjoy most of my time being
            outdoors.I enjoy mountain biking,climbing, and volleyball.
          </p>
          <p className="mb-0">
            When forced indoors, I follow a number of sci-fi and fantasy genre
            movies and television shows, and I spend a large amount of my free
            time exploring the latest technology advancements in the AI and ML
            world.
          </p>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="awards"
      >
        <div className="w-100">
          <h2 className="mb-5">Awards &amp; Certifications</h2>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-trophy text-warning" />
              Introduction to Psychology - Coursera Certification
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning" />
              Introduction to Discrete Mathematics for Computer Science
              Specialization - Coursera Certification
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning" />
              Machine Learning with TensorFlow on Google Cloud Platform
              Specialization - Coursera Certification
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning" />1<sup>st</sup>
              Place - Galgotias University - Product Launch Competition 2018
            </li>
          </ul>
        </div>
      </section>
    </div>
  </Layout>
);

export default IndexPage;
