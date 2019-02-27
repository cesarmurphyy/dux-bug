import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';

import { Container, Row, Col } from 'reactstrap';
import { Link } from '../routes';

import ContentContainer from '../components/shared/ContentContainer';
import ContentContainer2 from '../components/shared/ContentContainer2';
import ContactContainer from '../components/shared/ContactContainer';

class GraphicDesign extends React.Component {
  render() {
    return (
      <BaseLayout
        headerType={'landing'}
        className="blog-listing-page"
        title="Dux | iOS Development"
      >
        <div
          className="masthead"
          style={{
            backgroundImage: "url('/static/images/ecommerce-photo.jpeg')"
          }}
        >
          <div className="overlay" style={{ background: '#71238C' }}>
            <Container>
              <Row>
                <Col md="6">
                  <div className="site-heading">
                    <h1>iOS Apps</h1>
                    <span className="subheading">
                      Don’t sit on your idea a moment longer. Let’s get it to
                      market before someone else does!
                    </span>
                  </div>
                </Col>
                <Col md="6" />
              </Row>
            </Container>
          </div>
        </div>

        <ContentContainer
          font={'black'}
          background={'white'}
          title={'From Ideas to Deployment'}
          content={`We believe that collaboration is the key to success in App Development. Work with us from the first prototype to the deployment of your next great idea!`}
          style={{ background: 'white' }}
        />

        <ContactContainer
          image={'/static/images/contact-backing.jpg'}
          overlay={'#71238C'}
          blurb={`It is time to take your share of the $80+ billion dollar industry.`}
        />
      </BaseLayout>
    );
  }
}

export default GraphicDesign;
