import './Footer.scss';
import { Row } from 'react-bootstrap';

export default function Footer() {
  return (
    <div className='footer'>
      <Row className='mx-auto py-1 text-center'>
        <span>Copyright © 2022 Waterfront Management Inc.</span>
      </Row>
    </div>
  )
}
