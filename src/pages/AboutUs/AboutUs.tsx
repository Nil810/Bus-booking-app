import React from 'react';
import {
  Container,
  Typography,
  ThemeProvider,
  Box,
} from '@mui/material';
import {useTheme} from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import aboutUsImage from '../../assets/about-us.png';
import ourMissionImage from '../../assets/our-mission.jpg';
import ourStoryImage from '../../assets/our-story.jpg';


const AboutUs = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const styles = {
    image: {
      width: isSmallScreen ? '24rem' : '32rem',
      borderRadius: '8px',
      marginBottom: '2rem',
    },
  };
  
  return (
    <ThemeProvider theme={theme}>
      <Box bgcolor="#ffffff" pb="4rem" mt="3rem">
        <Container maxWidth="lg">
          <Box
            py="4rem"
            display="flex"
            flexDirection={{xs: 'column-reverse', md: 'row'}}
            alignItems="center"
          >
            <Box flex="1">
              <Typography variant="h3" component="h2" gutterBottom>
                About Us
              </Typography>
              <Typography variant="body1">
                coming soon...
              </Typography>
            </Box>
            <Box flex="1" textAlign="center">
              <img src={aboutUsImage} alt="About Us" style={styles.image} />
            </Box>
          </Box>

          <Box
            py="4rem"
            display="flex"
            flexDirection={{xs: 'column-reverse', md: 'row-reverse'}}
            alignItems="center"
          >
            <Box flex="1">
              <Typography variant="h3" component="h2" gutterBottom>
                Our Story
              </Typography>
              <Typography variant="body1">
                 coming soon...
              </Typography>
            </Box>
            <Box flex="1" textAlign="center" mb={{xs: '2rem', md: 0}}>
              <img src={ourStoryImage} alt="Our Story" style={styles.image} />
            </Box>
          </Box>

          <Box
            py="4rem"
            display="flex"
            flexDirection={{xs: 'column-reverse', md: 'row'}}
            alignItems="center"
          >
            <Box flex="1">
              <Typography variant="h3" component="h2" gutterBottom>
                Our Mission: Safty & comfort
              </Typography>
              <Typography variant="body1">
                coming soon...
              </Typography>
            </Box>
            <Box flex="1" textAlign="center">
              <img
                src={ourMissionImage}
                alt="Our Mission"
                style={styles.image}
              />
            </Box>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default AboutUs;