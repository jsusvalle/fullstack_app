import { FC, useState } from 'react';
import Link from 'next/link';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { useRouter } from 'next/router';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { toast } from 'react-toastify';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import { userData } from 'types';

import { useSignUp } from 'hooks/endpoints';

export const SignUpForm: FC = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<userData>({
    mode: 'onTouched',
    resolver: yupResolver(
      yup
        .object({
          name: yup.string().required('Campo requerido'),
          address: yup.string().required('Campo requerido'),
          email: yup
            .string()
            .email('Debe contener un email válido')
            .required('Campo requerido'),
          password: yup
            .string()
            .required('Campo requerido')
            .min(6, 'Debe tener mínimo 6 carácteres'),
        })
        .required()
    ),
    defaultValues: {
      name: '',
      email: '',
      address: '',
      password: '',
    },
  });

  const postSignUp = useSignUp({
    onSuccess: () => {
      toast.success('Usuario creado correctamente, inicie sesión');
      router.push('/auth/login');
    },
    onError: e => {
      toast.error(e?.response?.data?.message);
    },
  });

  const onSubmit: SubmitHandler<userData> = data => {
    postSignUp.mutate(data);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      width="100%"
      display="flex"
      flexDirection="column"
      rowGap="1.5rem"
      autoComplete="off">
      <Typography py="1rem" variant="h4" fontWeight="bold">
        Registrarse
      </Typography>

      <Controller
        name="name"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            {...register('name')}
            focused
            id="name"
            label={'Nombre'}
            type="name"
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
            focused
            id="address"
            label={'Dirección'}
            type="address"
            error={!!errors.address}
            helperText={errors.address?.message}
          />
        )}
      />

      <Controller
        name="email"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            {...register('email')}
            focused
            id="email"
            label={'Correo'}
            type="email"
            error={!!errors.email}
            helperText={errors.email?.message}
          />
        )}
      />

      <Controller
        name="password"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            {...register('password')}
            focused
            id="password"
            label="Contraseña"
            type={showPassword ? 'text' : 'password'}
            error={!!errors.password}
            helperText={errors.password?.message}
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <IconButton
                    aria-label="aria-label-password"
                    onClick={() => setShowPassword(!showPassword)}
                    edge="end">
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
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
          Crear cuenta
        </Typography>
      </Button>

      <Divider />

      <Link href="/auth/login">
        <Typography textAlign="end" color="GrayText" py=".3rem" variant="body2">
          ¿Ya tienes cuenta? Inicia sesión aquí
        </Typography>
      </Link>
    </Box>
  );
};
