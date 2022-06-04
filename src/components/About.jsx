import './About.scss';
import { Row, Col } from 'react-bootstrap';
import { EnvelopeFill, TelephoneFill } from 'react-bootstrap-icons';

export default function About() {
  return (
    <div id='about'>
      <Row className='p-2'>
        <h2 className='text-center mt-5'>ABOUT US</h2>
        <Col xl={12} xxl={7} className='p-5'>
          <h4>Investment solutions and plans that adapt and achieve.</h4>
          <p>Waterfront advisors get to know you and your family’s goals so they can help keep you on track through life’s changes.</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>

          <h4 className='mt-5'>Want to ask a question?</h4>
          <Row>
            <Col>
              <Col>
                <h5>Call Us</h5>
                <span><TelephoneFill className='me-2'/>{'(613) 123-4567'}</span>
              </Col>
            </Col>
            <Col>
              <h5>Email</h5>
              <span><EnvelopeFill className='me-2'/>contact@waterfrontmanagement.ca</span>
            </Col>
          </Row>
        </Col>
        <Col xl={12} xxl={5} className='justify-content-center'>
          <Col>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2800.4466850625295!2d-75.70229598425153!3d45.420496244379315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce0454537ca11d%3A0xc1dca24fb1e5b26e!2s99%20Bank%20St%2C%20Ottawa%2C%20ON%20K1P%206B9!5e0!3m2!1sen!2sca!4v1654211947438!5m2!1sen!2sca"
              height="400" 
              width="100%" 
              style={{border:0, padding:50, paddingBottom:10}} 
              allowfullscreen="" 
              loading="lazy" 
              referrerpolicy="no-referrer-when-downgrade">
            </iframe>
            <h6 className='text-center mb-5 mt-0'>Address here</h6>
          </Col>
          
          <Col className='m-auto w-50'>
            <h5 className='text-center'><b>Hours</b></h5>
            <Row>
              <Col className='text-end me-4'>Mon - Fri</Col>
              <Col>9am - 5pm</Col>
            </Row>
            <Row>
              <Col className='text-end me-4'>Saturday</Col>
              <Col>10am - 4pm</Col>
            </Row>
            <Row>
              <Col className='text-end me-4'>Sunday</Col>
              <Col>CLOSED</Col>
            </Row>
          </Col>
        </Col>
      </Row>
    </div>
  )
}
