import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';
import Typed from 'react-typed';

import { Container, Row, Col } from 'reactstrap';
import { Link } from '../routes';
import ContactForm from '../components/ContactForm';

class Contact extends React.Component {
  constructor(props) {
    super(props);

    this.roles = ['plan', 'design', 'code', 'test', 'deploy'];
  }

  render() {
    return (
      <BaseLayout headerType={'landing'} className="blog-listing-page">
        <div
          className="head"
          style={{ backgroundImage: "url('/static/images/code.jpg')" }}
        >
          <div className="overlay" />
          <Container>
            <div className="row">
              <div className="col-lg-8 col-md-10 mx-auto">
                <div className="site-heading">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="72"
                    height="72"
                    viewBox="0 0 24 24"
                    fill="white"
                    strokeWidth="0.5"
                  >
                    <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z" />
                  </svg>
                  <h1>Let's get started</h1>
                  <span className="subheading">
                    We're excited to{' '}
                    <Typed
                      typeSpeed={80}
                      backSpeed={80}
                      strings={this.roles}
                      backDelay={1000}
                      loopCount={0}
                      showCursor
                      cursorChar="|"
                    />{' '}
                    your project.
                  </span>
                </div>
                <ContactForm />
              </div>
            </div>
          </Container>
        </div>

        <footer>
          <Container>
            <Row>
              <div className="col-lg-8 col-md-10 mx-auto">
                <ul className="list-inline text-center">
                  <li className="list-inline-item">
                    <a href="#">
                      <img
                        src="/static/images/Dux_logo2.svg"
                        style={{
                          height: '75px',
                          paddingBottom: '10px',
                          color: 'white'
                        }}
                      />
                      {/* <span className="fa-stack fa-lg">
                        <i className="fas fa-circle fa-stack-2x" />
                        <i className="fab fa-twitter fa-stack-1x fa-inverse" />
                      </span> */}
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">
                      <span className="fa-stack fa-lg">
                        <i className="fas fa-circle fa-stack-2x" />
                        <i className="fab fa-facebook-f fa-stack-1x fa-inverse" />
                      </span>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">
                      <span className="fa-stack fa-lg">
                        {/* <i className="fas fa-circle fa-stack-2x" /> */}
                        <i className="fab fa-instagram fa-stack-2x fa-inverse" />
                      </span>
                    </a>
                  </li>
                </ul>
                <p className="copyright text-muted">
                  Copyright &copy; Dux Development 2019
                </p>
              </div>
            </Row>
          </Container>
        </footer>
        <style jsx>
          {`
            @import url('https://use.fontawesome.com/releases/v5.5.0/css/all.css');
          `}
        </style>
      </BaseLayout>
    );
  }
}

export default Contact;
