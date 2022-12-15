import type { FC } from 'react';
import Image from 'next/image';

import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

import PhotoBG from 'public/assets/photo_london.jpg';
import PhotoPeople from 'public/assets/people_photo.jpg';

import { Header, Footer } from 'components/organism';

export const HomePage: FC = () => {
  return (
    <Box>
      <Box sx={{ position: 'relative' }}>
        <Image
          src={PhotoBG}
          alt="london photo"
          fill
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            zIndex: -1,
            height: '100%',
            width: '100%',
            objectFit: 'cover',
            filter: 'brightness(0.45)',
          }}
        />
        <Container maxWidth="lg">
          <Header />

          <Box
            height={600}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            gap="1rem"
            sx={{ margin: '0 auto', minWidth: 'auto', maxWidth: '45rem' }}>
            <Typography variant="h3" textAlign="center" color="#fff">
              A powerful influencer marketing platform for advertisers
            </Typography>
            <Button
              sx={{
                backgroundColor: '#FB6D9D',
                margin: '0 auto',
                borderRadius: '5rem',
                padding: '1rem 2rem',
                '&:hover': {
                  backgroundColor: '#b80540',
                },
              }}
              color="primary">
              <Typography variant="button" textAlign="center" color="#fff">
                Start your free trial
              </Typography>
            </Button>
          </Box>
        </Container>
      </Box>

      <Box py="7rem">
        <Container maxWidth="lg">
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap="1rem"
            sx={{ margin: '0 auto', minWidth: 'auto', maxWidth: '45rem' }}>
            <Typography variant="h4">Our mission</Typography>
            <Typography color="GrayText" textAlign="center">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad modi
              vel maxime eos rem? Distinctio repellat sint quisquam sapiente, ad
              facere voluptate libero nihil eum delectus officiis expedita
              fugiat. Quia. Lorem ipsum dolor sit, amet consectetur adipisicing
              elit. Ad modi vel maxime eos rem? Distinctio repellat sint
              quisquam sapiente, ad facere voluptate libero nihil eum delectus
              officiis expedita fugiat. Quia.
            </Typography>
          </Box>
        </Container>
      </Box>

      <Box py="7rem" sx={{ backgroundColor: '#EEF2F5' }}>
        <Container maxWidth="lg">
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap="1rem"
            sx={{ margin: '0 auto', minWidth: 'auto', maxWidth: '45rem' }}>
            <Typography variant="h4">Our people</Typography>
            <Typography color="GrayText" textAlign="center">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad modi
              vel maxime eos rem? Distinctio repellat sint quisquam sapiente, ad
              facere voluptate libero nihil eum delectus officiis expedita
              fugiat. Quia. Lorem ipsum dolor sit, amet consectetur adipisicing
              elit. Ad modi vel maxime eos rem? Distinctio repellat sint
              quisquam sapiente, ad facere voluptate libero nihil eum delectus
              officiis expedita fugiat. Quia.
            </Typography>
          </Box>

          <Grid container pt="4rem" spacing={{ xs: 5, md: 2 }}>
            {[1, 2, 3].map(item => (
              <Grid item key={item} xs>
                <Box
                  display="flex"
                  flexDirection="column"
                  justifyContent="justify-between"
                  maxWidth={300}
                  margin={{ xs: '0 auto', md: '0' }}>
                  <Image
                    src={PhotoPeople}
                    width={300}
                    height={200}
                    alt="people photo"
                  />
                  <Typography pt="1rem" fontWeight="bold">
                    Rasmus D. Nielsen
                  </Typography>
                  <Typography color="GrayText" py="1rem" variant="body2">
                    <b>CEO - Founder</b> who makes easy to change and easy to
                    create new elements
                  </Typography>
                  <Divider />
                  <Typography
                    pt="1rem"
                    fontWeight="bold"
                    variant="body2"
                    sx={{ color: { xs: '#93D4E4', md: 'gray' } }}>
                    @achoo
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Box bgcolor="#FB6D9D" py="3rem">
        <Container maxWidth="lg">
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            flexDirection={{ xs: 'column', md: 'row' }}
            rowGap="2rem">
            <Typography color="#fff" textAlign="center">
              No obligations or contracts. Achoo influencer platform is
              available to all advertisers
            </Typography>
            <Button
              sx={{
                backgroundColor: '#D95782',
                margin: '0 auto',
                borderRadius: '5rem',
                padding: '1rem 2rem',
                '&:hover': {
                  backgroundColor: '#b80540',
                },
              }}
              color="primary">
              <Typography variant="button" textAlign="center" color="#fff">
                Start your free trial
              </Typography>
            </Button>
          </Box>
        </Container>
      </Box>

      <Box component="footer" sx={{ display: { xs: 'none', sm: 'block' } }}>
        <Footer />
      </Box>
    </Box>
  );
};
