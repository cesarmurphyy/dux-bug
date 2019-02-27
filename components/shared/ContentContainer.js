import React from 'react';
import { Button, Container, Row, Col } from 'reactstrap';

class ContentContainer extends React.Component {
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
      background,
      featureImage
    } = this.props;

    return (
      <div>
        <div
          className="content-container"
          style={{
            backgroundImage: `url('${this.props.image}')`,
            color: `${this.props.font}`,
            background: `${this.props.background}`
          }}
        >
          <div
            className="container-overlay"
            style={{ background: `${this.props.overlay}` }}
          />
          <Container className="super-container">
            <Row>
              <Col md="6">
                <div className="display-image">
                  <img
                    className="display-image-inner"
                    src={this.props.featureImage}
                  />
                </div>
              </Col>
              <Col md="6" className="container-button">
                <h1 className="container-inner">{this.props.title}</h1>
                <p className="container-inner">{this.props.content}</p>
                <Button className="h1-contact">contact us</Button>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default ContentContainer;
