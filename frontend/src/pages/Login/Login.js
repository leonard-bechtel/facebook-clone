import React from 'react';
import LoginForm from './LoginForm';
import MainHeader from '../../components/ui/MainHeader';

export default function Login() {
  return (
    <>
      <MainHeader title="Login" />
      <LoginForm />
    </>
  )
}
