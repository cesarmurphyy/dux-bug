import React from 'react';
import { Form, Row, Col, FormGroup, Input, Label, Button } from 'reactstrap';
import axios from 'axios';

const initialState = {
  name: '',
  email: '',
  option: '',
  message: '',
  formErrors: {
    name: '',
    email: '',
    option: '',
    message: ''
  },
  nameValid: false,
  emailValid: false,
  optionValid: false,
  messageValid: false,
  isValid: false
};

export default class ContactForm extends React.Component {
  state = initialState;

  handleChange = e => {
    e.preventDefault();

    const { name, value } = e.target;

    let formErrors = { ...this.state.formErrors };
    let nameValid = this.state.nameValid;
    let emailValid = this.state.emailValid;
    let optionValid = this.state.optionValid;
    let messageValid = this.state.messageValid;

    switch (name) {
      case 'name':
        nameValid = value.length >= 1;
        formErrors.name = nameValid ? '' : 'Please provide your name.';
        break;
      case 'email':
        emailValid = value.match(
          /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        );
        formErrors.email = emailValid ? '' : 'Invalid email address.';
        break;
      case 'option':
        optionValid = value.length >= 1;
        formErrors.option = optionValid ? '' : 'Please select an option';
        break;
      case 'message':
        messageValid = value.length >= 1;
        formErrors.message = messageValid
          ? ''
          : 'Please provide a short description.';
        break;
      default:
        break;
    }

    this.setState(
      {
        formErrors,
        [name]: value,
        nameValid: nameValid,
        emailValid: emailValid,
        optionValid: optionValid,
        messageValid: messageValid
      },
      this.validation
    );
  };

  validation() {
    this.setState({
      isValid:
        this.state.nameValid &&
        this.state.emailValid &&
        this.state.optionValid &&
        this.state.messageValid
    });
  }

  async handleSubmit(e) {
    e.preventDefault();

    const { name, email, option, message } = this.state;

    const form = await axios.post('/api/form', {
      name,
      email,
      option,
      message
    });

    this.setState(initialState);
  }

  render() {
    const { formErrors } = this.state;

    return (
      <div className="contact-form">
        <div className="form-wrapper">
          <h3>Contact Us</h3>
          <Form onSubmit={e => this.handleSubmit(e)} noValidate>
            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label for="name">Name</Label>
                  <Input
                    className={formErrors.name.length > 0 ? 'error' : null}
                    type="text"
                    name="name"
                    noValidate
                    value={this.state.name}
                    onChange={this.handleChange}
                    placeholder="Name"
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="email">Email</Label>
                  <Input
                    className={formErrors.email.length > 0 ? 'error' : null}
                    type="email"
                    name="email"
                    noValidate
                    value={this.state.email}
                    onChange={this.handleChange}
                    placeholder="Email"
                  />
                </FormGroup>
              </Col>
            </Row>
            <FormGroup>
              <Label for="option">Subject</Label>
              <Input
                type="select"
                name="option"
                noValidate
                value={this.state.option}
                onChange={this.handleChange}
                placeholder="Subject"
              >
                <option
                  value=""
                  disabled
                  defaultValue
                  style={{ color: 'gray' }}
                >
                  Subject
                </option>
                <option value="Custom Website">Custom Website</option>
                <option value="Custom WebApp">Custom WebApp</option>
                <option value="iOS App">iOS App</option>
                <option value="E-Commerce">E-Commerce</option>
                <option value="Graphic Design">Graphic Design</option>
                <option value="Other">Other</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="message">Message:</Label>
              <Input
                className={formErrors.message.length > 0 ? 'error' : null}
                type="textarea"
                name="message"
                noValidate
                value={this.state.message}
                onChange={this.handleChange}
                placeholder="Message"
              />
            </FormGroup>
            <Button disabled={!this.state.isValid}>Submit</Button>
          </Form>
        </div>
      </div>
    );
  }
}
