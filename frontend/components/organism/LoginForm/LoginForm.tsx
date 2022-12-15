import { FC, useState } from 'react';
import { setCookie } from 'cookies-next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
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

import { useLogin } from 'hooks/endpoints';

import { userData } from 'types';

export const LoginForm: FC = () => {
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
          email: yup
            .string()
            .email('Debe ser un email válido')
            .required('Campo requerido'),
          password: yup
            .string()
            .required('Campo requerido')
            .min(6, 'Debe tener mínimo 6 carácteres'),
        })
        .required()
    ),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const postLogin = useLogin({
    onSuccess: data => {
      setCookie('token', data.data.token);
      router.push('/app/home');
    },
    onError: () => {
      toast.error('Email o contraseña incorrectos');
    },
  });

  const onSubmit: SubmitHandler<userData> = data => {
    postLogin.mutate(data);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      width="100%"
      display="flex"
      flexDirection="column"
      rowGap="1.5rem">
      <Typography py="1rem" variant="h4" fontWeight="bold">
        Ingresar a la app
      </Typography>

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
          Ingresar
        </Typography>
      </Button>

      <Divider />

      <Link href="/auth/sign-up">
        <Typography textAlign="end" color="GrayText" py=".3rem" variant="body2">
          ¿Aún no tienes cuenta? Haz click aquí
        </Typography>
      </Link>
    </Box>
  );
};
