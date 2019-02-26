import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import Typed from 'react-typed';
import { Button, Container, Row, Col } from 'reactstrap';
import ContentContainer from '../components/shared/ContentContainer';
import ContentContainer2 from '../components/shared/ContentContainer2';
import ContactContainer from '../components/shared/ContactContainer';

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.roles = ['what do we do?'];
  }

  render() {
    return (
      <BaseLayout className="cover" headerType="index">
        <div className="main-section">
          <Container>
            <Row>
              <Col md="12">
                <div className="logo-image-conatiner">
                  <img id="logo-image" src="/static/images/main-logo.svg" />
                </div>
              </Col>
            </Row>
          </Container>
          <div className="fade-container" />
        </div>

        <div
          className="content-container"
          style={{ background: 'white', marginTop: '95px' }}
        >
          <Container>
            <Row>
              <Col md="12" className="self-typed">
                <Typed
                  typeSpeed={65}
                  backSpeed={65}
                  strings={this.roles}
                  backDelay={1000}
                  loopCount={0}
                  showCursor
                  cursorChar="|"
                  className="self-typed"
                />
              </Col>
            </Row>
          </Container>
        </div>

        <ContentContainer
          font={'black'}
          background={'white'}
          title={'Web Development'}
          content={`From simple websites to real-time secure APIs, we are here to create fully custom solutions to take your online presence to the next level.`}
          style={{ background: 'white' }}
        />

        <ContentContainer2
          font={'white'}
          title={'iOS Apps'}
          content={`Whether it be the next big hit or a custom enterprise solution, we are here to provide a UX driven development service to turn your idea into a production ready app.`}
          style={{ background: 'white' }}
          image={'/static/images/iphone-backing.jpeg'}
          overlay={'#0E86DF'}
        />

        <ContentContainer
          font={'white'}
          image={'/static/images/ecommerce-backing.jpeg'}
          title={'E-Commerce'}
          content={`With over 20% of all purchases this year being made online, it is no secret that the future of sales is going digital. Using Shopify, our team can build your store to be as simple or complex as you desire, all while retaining the easy Shopify interface for your day to day management.`}
          overlay={'#272727'}
        />

        <ContentContainer2
          font={'white'}
          title={'Graphic Design'}
          content={`From promotional banners and logos to advertising UIs, let us help you to bring your brand idea to life.`}
          style={{ background: 'white' }}
          image={'/static/images/graphic-design-backing.jpeg'}
          overlay={'#0E86DF'}
        />

        <ContactContainer
          image={'/static/images/contact-backing.jpg'}
          overlay={'#272727'}
          blurb={`We look forward to chatting with you, to see how we can help you build your next dream idea. If you have something in mind that is not listed, don’t hesitate to ask.
          `}
        />

        <div className="footer">
          <Container>
            <Row>
              <Col md="12">
                <ul className="medium-script">
                  <li>Home</li>
                  <li>eCommerce</li>
                  <li>Graphic Design</li>
                  <li>Contact</li>
                </ul>
              </Col>
            </Row>
          </Container>
        </div>
      </BaseLayout>
    );
  }
}

export default Index;
