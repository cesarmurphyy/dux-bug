import React from 'react';
import Header from '../shared/Header';
import Head from 'next/head';
import { Container, Row } from 'reactstrap';
import ScrollableAnchor from 'react-scrollable-anchor';
import { configureAnchors } from 'react-scrollable-anchor';
import DuxLogo from '../shared/DuxLogo';

const BaseLayout = props => {
  const { className, children, title } = props;
  const headerType = props.headerType || 'default';

  configureAnchors({ scrollDuration: 800 });

  return (
    <React.Fragment>
      <Head>
        <title>{title}</title>
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <meta property="og:title" content="" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:url" content="http://localhost:3000" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="shorter description than above"
        />

        <link rel="icon" type="image/ico" href="/static/images/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.7.2/css/all.css"
          integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr"
          crossOrigin="anonymous"
        />
      </Head>
      <div>
        <ScrollableAnchor id={'upTop'}>
          <div />
        </ScrollableAnchor>
        <Container>
          <Row>
            <Header className={`port-nav-${headerType}`} />
          </Row>
        </Container>

        <main className={`cover ${className}`}>
          <div className="wrapper">{children}</div>
        </main>
        <footer>
          <Container>
            <Row>
              <div className="col-lg-8 col-md-10 mx-auto">
                <ul className="footer-icon-container">
                  <li className="list-inline-item">
                    <a href="#">
                      <DuxLogo />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="https://www.instagram.com/duxdevelopment/">
                      <span className="fa-stack fa-lg">
                        <i className="fab fa-instagram fa-stack-2x fa-inverse" />
                      </span>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#upTop">
                      <span className="fa-stack fa-lg">
                        <i className="fas fa-angle-double-up fa-stack-2x fa-inverse" />
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
      </div>
    </React.Fragment>
  );
};

export default BaseLayout;
