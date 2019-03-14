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
          <div className="overlay" style={{ background: '#CF3721' }} />
          <div className="site-heading">
            <div className="page-container">
              <h1>iOS Apps</h1>
              <p className="subheading">
                Don’t sit on your idea a moment longer. Let’s get it to market
                before someone else does!
              </p>
            </div>
            <div className="page-container">
              <img src="static/images/ios.svg" />
            </div>
          </div>
        </div>

        <ContentContainer
          featureImage={'/static/images/iphone-red.png'}
          imageClass={'ios-image'}
          font={'black'}
          background={'white'}
          title={'From Ideas to Deployment'}
          content={`We believe that collaboration is the key to success in App Development. Work with us from the first prototype to the deployment of your next great idea!`}
          style={{ background: 'white' }}
        />

        <ContactContainer
          font={'white'}
          image={'/static/images/contact-backing.jpg'}
          overlay={'#CF3721'}
          blurb={`It is time to take your share of the $80+ billion dollar industry.`}
          font={'white'}
        />
      </BaseLayout>
    );
  }
}

export default GraphicDesign;
