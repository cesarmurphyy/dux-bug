import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';
import { Container, Row, Col } from 'reactstrap';
import { Link } from '../routes';
import ContentContainer from '../components/shared/ContentContainer';
import ContentContainer2 from '../components/shared/ContentContainer2';
import ContactContainer from '../components/shared/ContactContainer';

class Ecommerce extends React.Component {
  render() {
    return (
      <BaseLayout
        headerType={'landing'}
        className="blog-listing-page"
        title="Dux | E-Commerce Solutions"
      >
        <div
          className="masthead"
          style={{
            backgroundImage: "url('/static/images/ecommerce-photo.jpeg')"
          }}
        >
          <div className="overlay" style={{ background: '#96bf48' }}>
            <Container>
              <Row>
                <Col md="6">
                  <div className="site-heading">
                    <h1>E-Commerce</h1>
                    <span className="subheading">
                      We create stunning responsive designs that deliver the
                      best user experience across a plethora of devices.
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
          title={'$104,567'}
          content={`The amount spent every second across e-commerce platforms. Your share starts with a clean, engaging, and user-friendly online storefront.`}
          style={{ background: 'white' }}
        />

        <ContactContainer
          image={'/static/images/contact-backing.jpg'}
          overlay={'#96bf48'}
          blurb={`Our service does not end with your finished product. Once delivered, we are happy to provide training as needed or options to manage the platform on your behalf.`}
        />
      </BaseLayout>
    );
  }
}

export default Ecommerce;
