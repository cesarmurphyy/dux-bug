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
        title="Dux | Graphic Design"
        current="graphic"
      >
        <div
          className="masthead"
          style={{
            backgroundImage: "url('/static/images/ecommerce-photo.jpeg')"
          }}
        >
          <div className="overlay" style={{ background: '#F5bE41' }} />
          <div className="site-heading">
            <div className="page-container">
              <h1>Graphic Design</h1>
              <p className="subheading">
                From custom logos to social media banners, we can create
                stunning designs taylored to your needs.
              </p>
            </div>

            <div className="page-container">
              <img src="/static/images/graphic-main.svg" />
            </div>
          </div>
        </div>

        <ContentContainer
          font={'black'}
          background={'white'}
          title={'Your Ideas, Visualised'}
          content={`With a vast knowledge of the Adobe Creative Cloud software, we can create stunning visual representations of your own ideas.
           We do not stop at beautiful static designs, we can also develop immersive motion graphics taylored to your needs`}
          style={{ background: 'white' }}
          featureImage={'/static/images/graphic-feature.svg'}
        />

        <ContactContainer
          font={'white'}
          image={'/static/images/contact-backing.jpg'}
          overlay={'#F5bE41'}
          blurb={`Our service does not end with your finished product. Once delivered, we are happy to provide training as needed or options to manage the platform on your behalf.`}
          font={'white'}
        />
      </BaseLayout>
    );
  }
}

export default GraphicDesign;
