// import React from 'react';

// const Home = () => {
//   return (
//     <div>
//       {/* <h1>Welcome to Our Nursery School</h1>
//       <p>Where Learning is Fun and Exciting!</p> */}

// // src/components/Home.js

import React from 'react';
import { Button, Grid, Typography } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import SchoolIcon from '@mui/icons-material/School';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import ChildCareIcon from '@mui/icons-material/ChildCare';
import './Home.css';
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div className='container-fluid'>
      <div className="hero-section">
        <Carousel autoPlay infiniteLoop showThumbs={false}>
          <div>
            <img src="https://plus.unsplash.com/premium_photo-1663106423058-c5242333348c?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Kids learning" />
          </div>
          <div>
            <img src="https://media.istockphoto.com/id/1151224020/photo/teacher-with-preschoolers-finger-painting-at-class.jpg?s=1024x1024&w=is&k=20&c=3O5oFtDXoZjkHYVptblrnqDiHZM9Kbde_erCuscElE4=" alt="Fun activities" />            
          </div>
          <div>
            <img src="https://media.istockphoto.com/id/1151224308/photo/teachers-with-children-learning-at-preschool.webp?s=1024x1024&w=is&k=20&c=UBgbTeUItSB0OTJGgaR6G_sg-yZqLWN8mDvIex8gfzk=" alt="Playing outdoors" />            
          </div>
        </Carousel>
      </div>

      <section className="welcome-section">
        <Typography variant="h3" align="center" color="primary" gutterBottom>
          Welcome to Happy Kids School!
        </Typography>
        <Typography variant="body1" align="center">
          At Happy Kids School, we believe in making learning fun, exciting, and engaging for all students.
        </Typography>
        <div className="cta-button" align="center">
          <Button variant="contained" color="secondary" > <Link to="/admission">Join Us Now!</Link></Button>
        </div>
      </section>

      <section className="features-section">
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6} md={3}>
            <div className="feature-box ">
              <SchoolIcon style={{ fontSize: 60, color: "#4caf50" }} />
              <Typography variant="h6">Quality Education</Typography>
              <Typography variant="body2">
                Our curriculum is designed to promote learning through fun activities.
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <div className="feature-box ">
              <LocalLibraryIcon style={{ fontSize: 60, color: "#ff9800" }} />
              <Typography variant="h6">Creative Learning</Typography>
              <Typography variant="body2">
                Fostering creativity through arts, crafts, and storytelling.
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <div className="feature-box ">
              <SportsSoccerIcon style={{ fontSize: 60, color: "#2196f3" }} />
              <Typography variant="h6">Sports & Activities</Typography>
              <Typography variant="body2">
                We promote physical activity with fun games and outdoor sports.
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <div className="feature-box ">
              <ChildCareIcon style={{ fontSize: 60, color: "#e91e63" }} />
              <Typography variant="h6">Caring Environment</Typography>
              <Typography variant="body2">
                Our school is a safe, caring, and nurturing environment for children.
              </Typography>
            </div>
          </Grid>
        </Grid>
      </section>
    </div>
  );
};

export default Home;

