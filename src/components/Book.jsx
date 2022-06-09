import { useState } from 'react';
import './Book.scss';
import { Col, Form, Button, Modal } from 'react-bootstrap';

const initialFormData = Object.freeze({
  name: "",
  email: "",
  type: "",
  phone: "",
  date: "",
  time: ""
});

export default function Book() {
  const [bookSuccess, setBookSuccess] = useState(false);
  const [formData, updateFormData] = useState(initialFormData);

  const handleChange = (e) => {
    updateFormData({
      ...formData,

      // Trimming any whitespace
      [e.target.name]: e.target.value.trim()
    });
  };

  const handleClose = () => {
    setBookSuccess(false);
    document.body.style.overflow = 'unset';
  };
  const handleShow = () => {
    console.log(formData);
    setBookSuccess(true);
    if (typeof window != 'undefined' && window.document) {
      document.body.style.overflow = 'hidden';
    }
  };

  return (
    <div className='my-5 py-2 book' id='book'>
      <div className='header-wrap'>
        <h2 className='text-center mt-5'>WORK WITH US</h2>
      </div>

      <div className='subheader-wrap text-center'>
        <h4>Get In Touch With Waterfront Management</h4>
        <h6>We would love to hear from you. Please leave us a message and we will be in touch within 24 hours.</h6>
      </div>

      <Form>
        <Form.Control name='name' type='name' placeholder='Name' onChange={handleChange} />

        <div className='d-flex'>
          <Form.Control name='email' type='email' placeholder='Email Address' className='me-2' onChange={handleChange} />
          <Form.Control name='phone' type='phone' placeholder='Phone Number' onChange={handleChange} />
        </div>

        <Form.Group>
          <Form.Select>
            <option disabled selected>Amount to be managed</option>
            <option value="1">$0 - $249,999</option>
            <option value="2">$250,000 - $749,999</option>
            <option value="3">$750,000 - $1,499,999</option>
          </Form.Select>
        </Form.Group>

        <Form.Group>
          <Form.Select>
            <option disabled selected>Choose an expert</option>
            <option value="george">George Pauler, CFA, CFP</option>
            <option value="eric">Eric Chen, CFA</option>
            <option value="fredrick">Fredrick Smith</option>
          </Form.Select>
        </Form.Group>

        <Form.Group>
          <Form.Select name='type' onChange={handleChange}>
            <option disabled selected>Meeting type</option>
            <option value="Virtual">Virtual meeting</option>
            <option value="In-Person">In-person meeting</option>
          </Form.Select>
        </Form.Group>

        <div className='d-sm-flex'>
          <Col xs={12} sm={7} className='message pe-sm-2'>
            <Form.Control type="text" placeholder="Message"></Form.Control>
          </Col>
          <Col xs={12} sm={5}>
            <Form.Group>
              <Form.Select name='time' onChange={handleChange}>
                <option disabled selected>Select a time</option>
                <option value="Any">Any time</option>
                <option value="Morning">Morning (9am - 11am)</option>
                <option value="Midday">Midday (12pm - 2:30pm)</option>
                <option value="Afternoon">Afternoon (3pm - 5pm)</option>
              </Form.Select>
            </Form.Group>
            <Form.Control name='date' onChange={handleChange} type="date" placeholder='Select a date'></Form.Control>
          </Col>
        </div>

        <div className='text-end mt-3'>
          <Button onClick={handleShow}>
            BOOK NOW
          </Button>
        </div>
      </Form>

      <Modal show={bookSuccess} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Booking Confirmed</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {formData.name}, thank you for booking an appointment with us! Expect to hear back from us within 24 hours.<br/><br/>
          If there are any issues or changes with you booking you will be notified by the email and phone number provided.<br/><br/>
          <b>Details:</b><br/>
          Email: {formData.email}<br/>
          Phone Number: {formData.phone}<br/>
          Meeting Type: {formData.type}<br/>
          Date: {formData.date}<br/>
          Time: {formData.time}<br/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
