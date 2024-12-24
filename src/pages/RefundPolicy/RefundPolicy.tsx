import React from 'react';
import {Container, Typography, Box, Link} from '@mui/material';
import TermsAndPolicy_1 from '../../assets/termsAndPolicy_1.avif';
import TermsAndPolicy_2 from '../../assets/termsAndPolicy_2.avif';
import TermsAndPolicy_3 from '../../assets/termsAndPolicy_3.jpg';

const styles = {
  container: {
    padding: '32px',
    backgroundColor: '#ffffff',
    color: '#000000',
    marginTop: '16px',
  },
  section: {
    marginBottom: '24px',
  },
  list: {
    paddingLeft: '20px',
  },
  image: {
    maxWidth: '20rem',
    height: 'auto',
    marginBottom: '2rem',
  },
};

const RefundPolicy = () => {
  return (
    <Box bgcolor="#ffffff" mt="3rem">
      <Container maxWidth="lg">
        <Box
          pt="4rem"
          display="flex"
          flexDirection={{xs: 'column-reverse', md: 'row'}}
          alignItems="center"
        >
          <Box flex="1">
            <Typography
              variant="h2"
              style={{marginBottom: '3rem'}}
              gutterBottom
            >
              Refund Policy
            </Typography>
            <Typography variant="body2" paragraph>
              Coming soon...
            </Typography>
            <Typography variant="h5" component="h2">
              Eligibility for Refund
            </Typography>
            <div style={styles.section}>
              <Typography variant="body2" paragraph>
               Coming soon...
              </Typography>
              <Typography variant="body2" paragraph>
              Coming soon...
              </Typography>
            </div>
          </Box>
          <Box
            flex="1"
            textAlign="center"
            sx={{marginBottom: {xs: '3rem', md: 0}}}
          >
            <img src={TermsAndPolicy_1} alt="About Us" style={styles.image} />
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
              How to Request a Refund
            </Typography>
            <Typography variant="body2" paragraph>
              Coming soon...
            </Typography>
            <Typography variant="body2" paragraph>
             Coming soon...
            </Typography>
            <Typography variant="body2" paragraph>
             Coming soon...
            </Typography>
            <Typography variant="body2" paragraph>
              Coming soon...
            </Typography>
          </Box>
          <Box flex="1" textAlign="center" mb={{xs: '2rem', md: 0}}>
            <img src={TermsAndPolicy_2} alt="Our Story" style={styles.image} />
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
              Customer Support
            </Typography>
            <Typography variant="body2" paragraph>
              Coming soon...
            </Typography>
            <Typography variant="body2" paragraph>
             Coming soon...
            </Typography>
          </Box>
          <Box flex="1" textAlign="center">
            <img
              src={TermsAndPolicy_3}
              alt="Our Mission"
              style={styles.image}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default RefundPolicy;
