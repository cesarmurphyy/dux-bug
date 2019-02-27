import React from 'react';
import { Button, Container, Row, Col } from 'reactstrap';

class ContactContainer extends React.Component {
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
      blurb
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
          <Container>
            <Row>
              <div className="contact-container">
                <Col md="6" className="container-inner">
                  <div>
                    <img
                      className="contact-image"
                      src="/static/images/Dux_logo1.svg"
                    />
                    <p className="container-inner">{this.props.blurb}</p>
                  </div>
                  <Button className="h1-contact">contact us</Button>
                </Col>
              </div>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default ContactContainer;
