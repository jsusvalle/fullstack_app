import type { FC } from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';
import Container from '@mui/material/Container';

import { useGetProfile } from 'hooks/endpoints';

export const HomeApp: FC = () => {
  const { data, isLoading, isError } = useGetProfile();

  if (isLoading) {
    return <Skeleton variant="rectangular" width="100%" height={400} />;
  }

  if (isError) {
    return <Skeleton variant="rectangular" width="100%" height={400} />;
  }

  return (
    <Container>
      <Typography my="2rem" variant="h4" fontWeight="bold">
        Datos del usuario
      </Typography>
      <Typography my=".5rem">Nombre: {data?.data.name}</Typography>
      <Typography my=".5rem">Dirección: {data?.data.address}</Typography>
      <Typography my=".5rem">Correo: {data?.data.email}</Typography>
    </Container>
  );
};
