import { useState, useEffect } from 'react';
import './Book.scss';
import { Row, Col, Form, Button, Modal } from 'react-bootstrap';

export default function Book() {
  const [bookSuccess, setBookSuccess] = useState(false);

  const handleClose = () => {
    setBookSuccess(false);
    document.body.style.overflow = 'unset';
  };
  const handleShow = () => {
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
        <Form.Control type='name' placeholder='Name' />

        <div className='d-flex'>
          <Form.Control type='email' placeholder='Email Address' />
          <Form.Control type='phone' placeholder='Phone Number' />
        </div>

        <Form.Group>
          <Form.Select>
            <option selected>Amount to be managed</option>
            <option value="1">$0 - $249,999</option>
            <option value="2">$250,000 - $749,999</option>
            <option value="3">$750,000 - $1,499,999</option>
          </Form.Select>
        </Form.Group>

        <Form.Group>
          <Form.Select>
            <option selected>Choose an expert</option>
            <option value="george">George Pauler</option>
            <option value="eric">Eric Chen</option>
            <option value="fredrick">Fredrick Smith</option>
          </Form.Select>
        </Form.Group>

        <div className='d-flex'>
          <Form.Control type="text" placeholder="Message"></Form.Control>
          <Col>
            <Form.Group>
              <Form.Select>
                <option selected>Select a time</option>
                <option value="any">Any time</option>
                <option value="morning">Morning (9am - 11am)</option>
                <option value="midday">Midday (12pm - 2:30pm)</option>
                <option value="afternoon">Afternoon (3pm - 5pm)</option>
              </Form.Select>
            </Form.Group>
            <Form.Control type="date" placeholder='Select a date'></Form.Control>
          </Col>
        </div>

        <div className='text-end mt-3'>
          <Button type='submit' onClick={handleShow}>
            BOOK NOW
          </Button>
        </div>
      </Form>

      <Modal show={bookSuccess} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Booking Confirmed</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Thank you for booking an appointment with us! Expect to hear back from us within 24 hours.<br/><br/>
          If there are any issues or changes with you booking you will be notified by the email and phone number provided.
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
