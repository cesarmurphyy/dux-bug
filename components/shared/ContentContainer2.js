import React from 'react';
import { Button, Container, Row, Col } from 'reactstrap';

class ContentContainer2 extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { title, content, image, overlay, font, featureImage } = this.props;

    return (
      <div>
        <div
          className="content-container"
          style={{
            backgroundImage: `url('${this.props.image}')`,
            color: `${this.props.font}`
          }}
        >
          <div
            className="container-overlay"
            style={{ background: `${this.props.overlay}` }}
          />
          <Container className="super-container">
            <Row>
              <Col md="6">
                <h1 className="container-inner">{this.props.title}</h1>
                <p className="container-inner">{this.props.content}</p>
              </Col>
              <Col md="6">
                <div className="display-image">
                  <img
                    className="display-image-inner"
                    src={this.props.featureImage}
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default ContentContainer2;
