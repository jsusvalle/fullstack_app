import { FC, useState, useEffect } from 'react';
import { deleteCookie } from 'cookies-next';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { useRouter } from 'next/router';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { toast } from 'react-toastify';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import { useGetProfile, usePutProfile } from 'hooks/endpoints';

import { userData } from 'types';

export const EditProfileForm: FC = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<userData>({
    mode: 'onTouched',
    resolver: yupResolver(
      yup.object({
        name: yup.string().required('Campo requerido'),
        address: yup.string().required('Campo requerido'),
      })
    ),
  });

  const { data, isSuccess } = useGetProfile();

  const postUpdateProfile = usePutProfile({
    onSuccess: () => {
      toast.success('Datos actualizados');
      router.push('/app/home');
    },
    onError: e => {
      toast.error(e?.response?.data?.message);
    },
  });

  useEffect(() => {
    if (isSuccess) {
      reset({
        name: data?.data?.name || '',
        address: data?.data?.address || '',
      });
    }

    return () => {
      reset({
        name: '',
        address: '',
      });
    };
  }, [isSuccess, data, reset]);

  const onSubmit: SubmitHandler<userData> = data => {
    postUpdateProfile.mutate(data);
  };

  const handleClickLogout = () => {
    deleteCookie('token');
    router.push('/auth/login');
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      width="100%"
      display="flex"
      flexDirection="column"
      rowGap="1.5rem">
      <Typography py="2rem" variant="h4" fontWeight="bold">
        Editar datos
      </Typography>

      <Controller
        name="name"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            {...register('name')}
            id="name"
            label={'Nombre'}
            type="text"
            focused
            error={!!errors.name}
            helperText={errors.name?.message}
          />
        )}
      />

      <Controller
        name="address"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            {...register('address')}
            id="address"
            label={'Dirección'}
            type="text"
            focused
            autoComplete="off"
            error={!!errors.address}
            helperText={errors.address?.message}
          />
        )}
      />

      <Button
        type="submit"
        sx={{
          backgroundColor: '#FB6D9D',
          borderRadius: '.5rem',
          padding: '1rem 2rem',
          '&:hover': {
            backgroundColor: '#b80540',
          },
        }}
        color="primary">
        <Typography color="white" py=".3rem" variant="body2">
          Editar perfil
        </Typography>
      </Button>

      <Divider />

      <Button
        onClick={handleClickLogout}
        sx={{
          backgroundColor: '#b80540',
          borderRadius: '.5rem',
          padding: '1rem 2rem',
          '&:hover': {
            backgroundColor: '#b80540',
          },
        }}
        color="primary">
        <Typography color="white" py=".3rem" variant="body2">
          Cerrar sesión
        </Typography>
      </Button>
    </Box>
  );
};
