import React from 'react';
import { Button, Container, Row, Col } from 'reactstrap';

class ContentContainer2 extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      title,
      content,
      image,
      overlay,
      font,
      featureImage,
      imageClass
    } = this.props;

    let linkTo = '';

    if (title === 'iOS Apps') {
      linkTo = 'http://dux.io/appdev';
    } else {
      linkTo = 'http://dux.io/graphic';
    }

    return (
      <div>
        <div
          className="content-container"
          style={{
            backgroundImage: `url('${image}')`,
            color: `${font}`
          }}
        >
          {/* <div className="angled-container"> */}
          <div
            className="container-overlay"
            style={{ background: `${overlay}` }}
          />
          <Container className="super-container">
            <Row>
              <Col md="6" className="container-button">
                <h1 className="container-inner">{title}</h1>
                <p className="container-inner">{content}</p>
                <a href={linkTo}>
                  <Button className="h1-contact">learn more</Button>
                </a>
              </Col>
              <Col md="6" style={{ height: '300px' }}>
                <div className={imageClass}>
                  <img className="display-image-inner" src={featureImage} />
                </div>
              </Col>
            </Row>
          </Container>
          {/* </div> */}
        </div>
      </div>
    );
  }
}

export default ContentContainer2;
