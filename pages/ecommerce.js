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
          <div className="overlay" style={{ background: '#258039' }} />
          <div className="site-heading">
            <div className="page-container">
              <h1>E-Commerce</h1>
              <span className="subheading">
                We create stunning responsive designs that deliver the best user
                experience across a plethora of devices.
              </span>
            </div>
            <div className="page-container">
              <img src="static/images/ecommerce-main.svg" />
            </div>
          </div>
        </div>
        <ContentContainer
          font={'black'}
          background={'white'}
          title={'$104,567'}
          content={`The amount spent every second across e-commerce platforms. Your share starts with a clean, engaging, and user-friendly online storefront.`}
          style={{ background: 'white' }}
          featureImage={'/static/images/shopify-partner.png'}
        />

        <ContactContainer
          font={'white'}
          image={'/static/images/contact-backing.jpg'}
          overlay={'#258039'}
          blurb={`Our service does not end with your finished product. Once delivered, we are happy to provide training as needed or options to manage the platform on your behalf.`}
          font={'white'}
        />
      </BaseLayout>
    );
  }
}

export default Ecommerce;
