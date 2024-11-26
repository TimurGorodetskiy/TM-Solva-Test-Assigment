import React, { useDebugValue } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, UseDispatch } from 'react-redux';
import { login } from '../store/authSlice';
import { useNavigate } from 'react-router-dom';

type LoginFormInputs = {
  username: string;
  password: string;
};

const LoginPage = () => {
  const { register, handleSubmit } = useForm<LoginFormInputs>();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (data: LoginFormInputs) => {
    const { username, password } = data;

    if (username === 'admin' && password === 'password') {
      dispatch(login());
      navigate('/');
    } else {
      alert('Неверный логин или пароль');
    }
  };

  return (
    <div>
      <h1>Вход</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor='username'>Логин</label>
          <input id='username' {...register('username')} />
        </div>

        <div>
          <label htmlFor='password'>Пароль</label>
          <input id='password' type='password' {...register('password')} />
        </div>
        <button type='submit'>Войти</button>
      </form>
    </div>
  );
};

export default LoginPage;
