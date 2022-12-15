import { FC, ReactNode } from 'react';
import Image from 'next/image';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import PhotoBG from 'public/assets/photo_london.jpg';

import { Header } from 'components/organism';

import { navBarItem } from 'types';

const navBarItems: navBarItem[] = [
  { name: 'Inicio', type: 'link', href: '/app/home' },
  { name: 'Perfil', type: 'link', href: '/app/profile' },
];

type LayoutProps = {
  children: ReactNode;
};

export const AppLayout: FC<LayoutProps> = ({ children }) => {
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
          <Header items={navBarItems} />
        </Container>
      </Box>

      {children}
    </Box>
  );
};
