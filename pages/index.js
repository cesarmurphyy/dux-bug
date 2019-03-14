import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import Typed from 'react-typed';
import { Button, Container, Row, Col } from 'reactstrap';
import ContentContainer from '../components/shared/ContentContainer';
import ContentContainer2 from '../components/shared/ContentContainer2';
import ContactContainer from '../components/shared/ContactContainer';
import AnimatedLogo from '../components/shared/AnimatedLogo';

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.roles = [
      'Developers.',
      'Designers.',
      'Creators.',
      'Innovators.',
      'People.'
    ];
  }

  render() {
    return (
      <BaseLayout className="cover" headerType="index" title="Dux Development">
        <div className="main-section">
          <Container>
            <Row>
              <Col md="12">
                <div className="logo-image-conatiner">
                  <AnimatedLogo />
                </div>
              </Col>
            </Row>
          </Container>
          <div className="fade-container" />
          <div className="fade-container-rad" />
        </div>

        <div className="typed-container" style={{ background: 'white' }}>
          <Container>
            <Row>
              <Col md="12" className="self-typed">
                We Are{' '}
                <Typed
                  loop
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
          featureImage={'/static/images/laptop.png'}
          hasButton={true}
          imageClass={'ios-image'}
        />

        <ContentContainer2
          font={'white'}
          title={'iOS Apps'}
          content={`Whether it be the next big hit or a custom enterprise solution, we are here to provide a UX driven development service to turn your idea into a production ready app.`}
          style={{ background: 'white' }}
          image={'/static/images/iphone-backing.jpeg'}
          overlay={'#25628b'}
          featureImage={'/static/images/iphone.png'}
          imageClass={'ios-image'}
        />

        <ContentContainer
          font={'black'}
          background={'white'}
          title={'E-Commerce'}
          content={`With over 20% of all purchases this year being made online, it is no secret that the future of sales is going digital. Using Shopify, our team can build
           your store to be as simple or complex as you desire, all while retaining the easy Shopify interface for your day to day management.`}
          style={{ background: 'white' }}
          featureImage={'/static/images/shopify.png'}
          hasButton={true}
          imageClass={'display-image'}
        />

        <ContentContainer2
          font={'white'}
          title={'Graphic Design'}
          content={`From promotional banners and logos to advertising UIs, let us help you to bring your brand idea to life.`}
          style={{ background: 'white' }}
          image={'/static/images/graphic-design-backing.jpeg'}
          overlay={'#25628b'}
          featureImage={'/static/images/graphic-laptop.svg'}
        />
      </BaseLayout>
    );
  }
}

export default Index;
