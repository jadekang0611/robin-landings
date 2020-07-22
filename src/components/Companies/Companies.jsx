import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Companies.css';

const Hiring = [
  {
    name: 'Bitribe',
    logo: '/images/logos/Bitribe.png',
  },
  { name: 'Cigna', logo: '/images/logos/Cigna.png' },
  { name: 'Coffr', logo: '/images/logos/Coffr.png' },
  { name: 'Disney', logo: '/images/logos/Disney.png' },
  { name: 'EY', logo: '/images/logos/EY.png' },
  { name: 'Glidewell', logo: '/images/logos/Glidewell.png' },
];

const Companies = (props) => {
  return (
    <>
      <div id='screen-five'>
        <section>
          <Row className='screen-five-row1'>
            <Col lg={6}>
              <div className='company-section'>
                <h2>{props.content.bottom_title}</h2>
                <h3>{props.content.bottom_main}</h3>
              </div>
            </Col>

            <Col lg={6} className='company-logo-container'>
              <div className='companies-section-logos'>
                <Row>
                  {Hiring.map((company, index) => (
                    <Col
                      key={index}
                      xs={6}
                      sm={4}
                      md={4}
                      lg={4}
                      className='logo-container'
                    >
                      <img src={company.logo} alt={company.name} />
                    </Col>
                  ))}
                </Row>
              </div>
            </Col>
          </Row>
        </section>
      </div>
    </>
  );
};

export default Companies;
