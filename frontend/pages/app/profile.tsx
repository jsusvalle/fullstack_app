import type { FC } from 'react';

import { AppLayout, EditProfile } from 'components/templates';

export const ProfilePage: FC = () => {
  return (
    <AppLayout>
      <EditProfile />
    </AppLayout>
  );
};

export default ProfilePage;
