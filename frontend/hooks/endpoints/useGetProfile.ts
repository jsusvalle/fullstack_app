import { useQuery, UseQueryOptions } from 'react-query';

import { AxiosResponse } from 'axios';
import { instanceApi } from 'utils/api/config';
import type { userData } from 'types';

type TQueryFnData = AxiosResponse<userData>;
type TError = AxiosResponse;

type TOptions = UseQueryOptions<TQueryFnData, TError>;

export const useGetProfile = (options?: TOptions) => {
  return useQuery<TQueryFnData, TError>(
    ['profile_Data'],
    () =>
      instanceApi.request({
        method: 'get',
        url: '/users/profile',
      }),
    options
  );
};
