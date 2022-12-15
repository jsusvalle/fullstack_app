import type { FC } from 'react';

import { AppLayout, HomeApp } from 'components/templates';

export const HomePage: FC = () => {
  return (
    <AppLayout>
      <HomeApp />
    </AppLayout>
  );
};

export default HomePage;
