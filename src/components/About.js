import React from 'react';
import { Container, Typography, Box, Grid } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import ChildCareIcon from '@mui/icons-material/ChildCare';
import './About.css';

const About = () => {
  return (
    <div>
      <Container maxWidth="md">
        <Box my={4}>
          <Typography variant="h3" gutterBottom>
            About Us
          </Typography>

          <Typography variant="body1" paragraph>
            Welcome to Kids Learning Hub! Our mission is to create a fun, interactive, and educational space for kids
            to explore and grow their knowledge. Whether you're looking for math exercises, fun science experiments, or creative arts, we have something for everyone!
          </Typography>

          <Typography variant="body1" paragraph>
            This website is designed with school kids in mind, providing educational resources in a safe, easy-to-navigate platform.
            Our content is curated by experienced educators to align with current school curricula, making learning engaging and effective.
          </Typography>

          <Typography variant="body1" paragraph>
            Parents and teachers can also benefit from our platform, as we offer a variety of tools and resources to assist in the learning process.
            From homework help to detailed progress tracking, we aim to make education accessible and enjoyable for everyone.
          </Typography>

          <Typography variant="body1" paragraph>
            Join us in fostering a love for learning in kids everywhere!
          </Typography>
        </Box>
      </Container>
      <Container>
        <section className="features-section">
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={3}>
              <div className="feature-box">
                <SchoolIcon style={{ fontSize: 60, color: "#4caf50" }} />
                <Typography variant="h6">Quality Education</Typography>
                <Typography variant="body2">
                  Our curriculum is designed to promote learning through fun activities.
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <div className="feature-box">
                <LocalLibraryIcon style={{ fontSize: 60, color: "#ff9800" }} />
                <Typography variant="h6">Creative Learning</Typography>
                <Typography variant="body2">
                  Fostering creativity through arts, crafts, and storytelling.
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <div className="feature-box">
                <SportsSoccerIcon style={{ fontSize: 60, color: "#2196f3" }} />
                <Typography variant="h6">Sports & Activities</Typography>
                <Typography variant="body2">
                  We promote physical activity with fun games and outdoor sports.
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <div className="feature-box">
                <ChildCareIcon style={{ fontSize: 60, color: "#e91e63" }} />
                <Typography variant="h6">Caring Environment</Typography>
                <Typography variant="body2">
                  Our school is a safe, caring, and nurturing environment for children.
                </Typography>
              </div>
            </Grid>
          </Grid>
        </section>
      </Container>
    </div>
  );
};

export default About;
