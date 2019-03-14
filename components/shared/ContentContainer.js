import React from 'react';
import { Button, Container, Row, Col } from 'reactstrap';
import { Link } from '../../routes';

class ContentContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  renderButton() {
    const { hasButton, title, content } = this.props;
    let linkTo = '';
    let selectStyle = '';

    if (title === 'Web Development') {
      linkTo = 'http://dux.io/webdev';
      selectStyle = 'h1-contact-web';
    } else {
      linkTo = 'http://dux.io/ecommerce';
      selectStyle = 'h1-contact-web';
    }

    if (hasButton) {
      return (
        <Col md="6" className="container-button">
          <h1 className="container-inner">{title}</h1>
          <p className="container-inner">{content}</p>
          <a href={linkTo}>
            <Button className={selectStyle}>learn more</Button>
          </a>
        </Col>
      );
    }
    return (
      <Col md="6" className="container-button">
        <h1 className="container-inner">{title}</h1>
        <p className="container-inner">{content}</p>
      </Col>
    );
  }

  render() {
    const {
      image,
      overlay,
      font,
      background,
      featureImage,
      imageClass
    } = this.props;

    return (
      <div>
        <div
          className="content-container"
          style={{
            backgroundImage: `url('${image}')`,
            color: `${font}`,
            background: `${background}`
          }}
        >
          <div
            className="container-overlay"
            style={{ background: `${overlay}` }}
          />
          <Container className="super-container">
            <Row className="flex-container">
              <Col md="6" style={{ minHeight: '225px' }}>
                <div className={imageClass}>
                  <img className="display-image-inner" src={featureImage} />
                </div>
              </Col>
              {this.renderButton()}
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default ContentContainer;
