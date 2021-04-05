import React from 'react';
import { Routes } from './routes';
import { UserProvider } from './context/UserContext';
import { GlobalStyle } from './styles/globals';

export function App() {
  return(
    <UserProvider >
      <Routes />
      <GlobalStyle />
    </UserProvider>
  );
}