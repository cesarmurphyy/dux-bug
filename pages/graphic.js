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
      <BaseLayout headerType={'landing'} className="blog-listing-page">
        <div
          className="masthead"
          style={{ backgroundImage: "url('/static/images/ecommerce-photo.jpeg')" }}
        >
          <div className="overlay"
          style={{background:"#FF7400"}}
          >
          <Container>
            <Row>
              <Col md="6">
                
                <div className="site-heading">
                  <h1>Graphic Design</h1>
                  <span className="subheading">
                    how would you like to make a dent in the E-Commerce industry? 
                  </span>
                </div>
              </Col>
              <Col md="6">
                
             
              </Col>
            </Row>
          </Container>
        </div>
        </div>

        <ContentContainer
            font={"black"}
            background={"white"}
            title={"Web Development"}
            content={`Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
            aut fugit sed quia consequuntur magni dolores eos qui ratione voluptatem 
            sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit 
            amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt 
            ut labore et dolore magnam aliquam quaerat voluptatem`}
            style={{background: "white"}}
      
            
          />

           <ContactContainer
            image={"/static/images/contact-backing.jpg"}
            overlay={"#FF7400"}
          />
        
          
          
         
      </BaseLayout>
    );
  }
}

export default GraphicDesign;
