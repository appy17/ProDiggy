import React from 'react'
import './Courses.css'
import { Button, Grid, Typography } from '@mui/material';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import SchoolIcon from '@mui/icons-material/School';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import ChildCareIcon from '@mui/icons-material/ChildCare';
import './Home.css';
function Courses() {
  return (
    <div>
      <h1>Our Courses</h1>
       <section className="features-section">
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6} md={3}>
            <div className="feature-box box">
              <SchoolIcon style={{ fontSize: 60, color: "#4caf50" }} />
              <Typography variant="h6">Nursery</Typography>
              <Typography variant="body2">
                Our curriculum is designed to promote learning through fun activities.
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <div className="feature-box box">
              <LocalLibraryIcon style={{ fontSize: 60, color: "#ff9800" }} />
              <Typography variant="h6">KG1</Typography>
              <Typography variant="body2">
                Fostering creativity through arts, crafts, and storytelling.
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <div className="feature-box box">
              <SportsSoccerIcon style={{ fontSize: 60, color: "#2196f3" }} />
              <Typography variant="h6">KG2</Typography>
              <Typography variant="body2">
                We promote physical activity with fun games and outdoor sports.
              </Typography>
            </div>
          </Grid>
        </Grid>
      </section>
    </div>
  )
}

export default Courses