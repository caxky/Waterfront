import './Home.scss';
import { Button, Col } from 'react-bootstrap';

export default function Home() {
  return (
    <div className='home'>
      <Col className='mx-auto text-center'>
        <img
          src='logo.svg'
          className="d-inline-block align-top home-logo"
          alt="Waterfront management logo"
        ></img>
        <h1 className='mt-4'>Wealthfront Management</h1>
        <h3>Financial solutions and wealth planning</h3>
        <Button className="mt-5" variant="outline-dark" href="#book">
          GET STARTED
        </Button>
        <div class="down-arrow"></div>
      </Col>
    </div>
  )
}
