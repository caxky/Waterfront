import './Book.scss';
import { Row, Col, Form } from 'react-bootstrap';

export default function Book() {
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
      </Form>
    </div>
  )
}
