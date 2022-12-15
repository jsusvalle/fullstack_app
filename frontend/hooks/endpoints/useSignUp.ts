import { useMutation, UseMutationOptions } from 'react-query';

import { AxiosResponse } from 'axios';
import { instanceApi } from 'utils/api/config';
import type { userData } from 'types';

type TData = AxiosResponse<string>;
type TError = AxiosResponse & { response: { data: { message: string } } };
type TVariables = userData;
type TContext = unknown;

type TOptions = UseMutationOptions<TData, TError, TVariables, TContext>;

export const useSignUp = (options?: TOptions) => {
  return useMutation<TData, TError, TVariables, TContext>(
    async data =>
      instanceApi.request({
        method: 'post',
        url: '/users/sign-up',
        data,
      }),
    options
  );
};
