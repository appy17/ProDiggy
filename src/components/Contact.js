import React, { useState } from 'react';
import map from './Images/map.png'
import './contact.css'
import { Link } from 'react-router-dom';


const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div>

      <div className='container'>
        <div className='row'>
        <h2 className='text'>Get in touch with your Favourite school</h2>
          <div className='col-md-6'>
            <Link to="https://www.google.com/maps/place/Prodigy+Kids'+School+of+Excellence/@21.1339491,79.1101439,17z/data=!3m1!4b1!4m6!3m5!1s0x3bd4c75262fc7dad:0x21e972274431ca8c!8m2!3d21.1339491!4d79.1127188!16s%2Fg%2F1q67s33jm!5m1!1e1?entry=ttu&g_ep=EgoyMDI0MDkwNC4wIKXMDSoASAFQAw%3D%3D"><img src={map} width="500px" /></Link>
          </div>
          <div className='col-md-6'>
            <div className='col-md-6'>
              <form onSubmit={handleSubmit}>
                <div><span>Contact Us :</span> </div>
                <div>
                  <label>First Name:</label>
                  <input type="text" name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label>Last Name:</label>
                  <input type="text" name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>


                <div>
                  <label>Email:</label>
                  <input type="email" name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label>Mobile Number:</label>
                  <input type="tel" name="mobile" value={formData.mobile}
                    onChange={handleChange}
                    required
                    pattern="[0-9]{10}"
                    maxLength="10"
                    title="Please enter a valid 10-digit mobile number"
                  />
                </div>
                <div >
                  <label for="message">Your Message :</label>
                  <textarea id="message" name="message" value={formData.comments}
                    onChange={handleChange} required ></textarea>
                </div>
                <button type="submit" className='submit'>Submit</button>
              </form>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
};

export default Contact;
