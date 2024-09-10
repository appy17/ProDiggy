import React, { useState } from 'react';
import './Admission.css'
import { Col, Container, Row } from 'react-bootstrap';

const Admission = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    pincode: '',
    state: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
  };

  return (
    <div>
      <Container>
        <Row className='one-row'>
          <div className='col-md-6 '>
            
            <ol className='list' type='1'>
              <li>Fill the School Admission Inquiry Form on the Website</li>
              <li>We will invite you to the nearest Kidzee preschool</li>
              <li>Visit the School for Campus Tour</li>
              <li>Join the Prodigy kids' School of Excellence for better future of the child</li>
            </ol>
          </div>
          <div className='col-md-6'>
            <form onSubmit={handleSubmit}>
            <div><span>Enquiry Form :</span> </div>
              {/* First Name Field */}
              <div>
                <label>First Name:</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Last Name Field */}
              <div>
                <label>Last Name:</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Email Field */}
              <div>
                <label>Email:</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Mobile Number Field */}
              <div>
                <label>Mobile Number:</label>
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                  pattern="[0-9]{10}"
                  maxLength="10"
                  title="Please enter a valid 10-digit mobile number"
                />
              </div>

              {/* Pincode Field */}
              <div>
                <label>Pincode:</label>
                <input
                  type="text"
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleChange}
                  required
                  pattern="[0-9]{6}"
                  maxLength="6"
                  title="Please enter a valid 6-digit pincode"
                />
              </div>

              {/* State Field */}
              <div>
                <label>State:</label>
                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Submit Button */}
              <button type="submit" className='submit'>Submit</button>
            </form>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Admission;
