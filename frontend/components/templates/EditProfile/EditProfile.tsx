import type { FC } from 'react';

import Container from '@mui/material/Container';

import { EditProfileForm } from 'components/organism';

export const EditProfile: FC = (): JSX.Element => {
  return (
    <Container>
      <EditProfileForm />
    </Container>
  );
};
