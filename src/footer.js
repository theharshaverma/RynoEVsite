import '@fortawesome/fontawesome-free/css/all.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='https://instagram.com' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='https://linkedin.com' className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>
        </div>
      </section>

      <section>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
             
          <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                Rhyno Wheels Private limited, Near UG hostel gate #2, Behind PDEU,Raisan, Gandhinagar, Gujarat, India
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                info@rhyno.in
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> +91-9023987528
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Our Policy</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Privacy Policies
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Refund Policy
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Website Policy
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Quick Links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Career
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Rentals
                </a>
              </p>
            </MDBCol>

          </MDBRow>
        </MDBContainer>
      </section>
      <hr className="my-4" />
    </MDBFooter>
  );
}
