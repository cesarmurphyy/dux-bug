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
              <Col md="12" className="container-inner">
                <div>
                  <img
                    className="contact-image"
                    src="/static/images/Dux_logo1.svg"
                  />
                  <h4 className="h1-covered">{this.props.blurb}</h4>
                </div>
                <button className="h1-contact">contact us</button>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default ContactContainer;
