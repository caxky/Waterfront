import './Home.scss';
import { Button, Col } from 'react-bootstrap';

export default function Home() {
  return (
    <Col className='mx-auto text-center'>
      <img
        src='logo.svg'
        width='200'
        height='200'
        className="d-inline-block align-top"
        alt="Waterfront management logo"
      ></img>
      <h1 className='mt-4'>Wealthfront Management</h1>
      <h3>Financial solutions and wealth planning</h3>
      <Button className="mt-5" href="#book">
        GET STARTED
      </Button>
      <div class="down-arrow"></div>
    </Col>
  )
}
