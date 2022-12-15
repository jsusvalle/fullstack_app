import type { FC } from 'react';
import Link from 'next/link';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

import { footerItems } from './footerData';

export const Footer: FC = () => {
  return (
    <Container maxWidth="lg" sx={{ py: '4rem' }}>
      <Grid container pb="3rem" spacing={{ xs: 5, md: 2 }}>
        {footerItems.map(item => (
          <Grid item key={item.title} xs>
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="justify-between"
              maxWidth={300}>
              <Typography py="1rem" fontWeight="bold" variant="body2">
                {item.title}
              </Typography>
              {item.items.map(name => (
                <Link href="/" key={name} style={{ textDecoration: 'none' }}>
                  <Typography color="GrayText" py=".3rem" variant="body2">
                    {name}
                  </Typography>
                </Link>
              ))}
            </Box>
          </Grid>
        ))}
        <Grid item xs>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="justify-between"
            maxWidth={300}>
            <Typography py="1rem" fontWeight="bold" variant="body2">
              Contact Us
            </Typography>
            <Typography color="GrayText" py=".5rem" variant="body2">
              Achoo ApS <br /> Danneskold-Samsoes Alle 41 <br /> 1434 Copenhagen
              K <br /> Denmark
            </Typography>
            <Typography color="GrayText" py=".5rem" variant="body2">
              Tel: +45 24 47 48 78
            </Typography>
          </Box>
        </Grid>
        <Grid item xs></Grid>
      </Grid>

      <Divider />

      <Box
        py="1rem"
        display="flex"
        justifyContent="space-between"
        alignItems="center">
        <Typography
          variant="h4"
          component="div"
          sx={{
            fontFamily: 'monospace',
            fontWeight: 700,
            textDecoration: 'none',
          }}>
          Achoo
        </Typography>

        <Typography variant="body2" color="GrayText">
          Achoo apS @2015
        </Typography>
      </Box>
    </Container>
  );
};
