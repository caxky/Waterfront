import './About.scss';
import { Row, Col, Container } from 'react-bootstrap';
import { EnvelopeFill, TelephoneFill } from 'react-bootstrap-icons';

export default function About() {
  return (
    <div className='about' id='about'>
      <h2 className='text-center mt-5'>ABOUT US</h2>
      <Container className='mx-auto'>
        <Row xl={7} className='p-2 d-flex'>
          <Col xl={12} xxl={6} className='p-5'>
            <h4>Investment solutions and plans that adapt and achieve.</h4>
            <p>Waterfront advisors get to know you and your family’s goals so they can help keep you on track through life’s changes.</p>
            <h4>What services do we offer?</h4>
            <ul>
              <li>RRSP, TFSA, RESP, and non-registered account management</li>
              <li>Stock, Bond, ETF, and Mutual Fund investments</li>
              <li>Personally curated investment plans</li>
              <li>Work directly with an expert</li>
              <li>Tax planning</li>
              
            </ul>

            <h4 className='mt-5'>Want to ask a question?</h4>
            <Row>
              <Col sm={6} xs={12} className='my-3'>
                <h5><TelephoneFill size={20} className='me-2'/>Call Us</h5>
                <span>{'(613) 123-4567'}</span>
              </Col>
              <Col sm={6} xs={12} className='my-3'>
                <h5><EnvelopeFill size={20} className='me-2'/>Email</h5>
                <span>contact@waterfrontmanagement.ca</span>
              </Col>
            </Row>
          </Col>
          <Col lg={12} xxl={6} className='justify-content-center align-items-center d-xl-flex flex-xxl-column'>
            <Col md={12} xl={9} xxl={12} className='mb-3'>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2800.4466850625295!2d-75.70229598425153!3d45.420496244379315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce0454537ca11d%3A0xc1dca24fb1e5b26e!2s99%20Bank%20St%2C%20Ottawa%2C%20ON%20K1P%206B9!5e0!3m2!1sen!2sca!4v1654211947438!5m2!1sen!2sca"
                title="Google maps location"
                height="400" 
                width="100%" 
                style={{border:0, padding:30, paddingBottom:10}} 
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade">
              </iframe>
            </Col>
            
            <Col md={12} xl={3} xxl={12} className='hours m-auto'>
              <h5 className='text-center'><b>Hours</b></h5>
              <Row className='my-2'>
                <Col xs={6} className='text-center'>Mon - Fri</Col>
                <Col className='text-center'>9am - 5pm</Col>
              </Row>
              <Row className='my-2'>
                <Col xs={6} className='text-center'>Saturday</Col>
                <Col className='text-center'>10am - 4pm</Col>
              </Row>
              <Row className='my-2'>
                <Col xs={6} className='text-center'>Sunday</Col>
                <Col className='text-center'>CLOSED</Col>
              </Row>
            </Col>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
