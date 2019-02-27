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
        title="Dux | Web Development"
      >
        <div
          className="masthead"
          style={{
            backgroundImage: "url('/static/images/ecommerce-photo.jpeg')"
          }}
        >
          <div className="overlay" style={{ background: '#0093FF' }}>
            <Container>
              <Row>
                <Col md="6">
                  <div className="site-heading">
                    <h1>Web Development</h1>
                    <span className="subheading">
                      Using our expertise in React, we can create lightweight,
                      interactive Websites and Web Apps tailored to meet your
                      business needs.
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
          title={'Built to Order'}
          content={`Get ahead of your competition with a custom built interface to showcase your brand and ideas. In today’s society, your website is your first impression to your potential customers. Allow us to help you to make it one to remember.`}
          style={{ background: 'white' }}
        />

        <ContactContainer
          image={'/static/images/contact-backing.jpg'}
          overlay={'#0093FF'}
          blurb={`Ready to take your brand to the next level? Get in touch with us!`}
        />
      </BaseLayout>
    );
  }
}

export default GraphicDesign;
