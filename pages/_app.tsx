// pages/_app.tsx
/* eslint-disable react/jsx-props-no-spreading */
import React, { FC, useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import { AppProps } from 'next/app';
import Head from 'next/head';
import theme from '@styles/theme';
import { Dashboard } from '../template/Dashboard'
import { Action, combineReducers } from 'redux';
import { ThunkAction, configureStore } from '@reduxjs/toolkit';

import { TemplateStore } from '../template/store/template.store';
import { Provider } from 'react-redux';
import { TombolaStore } from 'components/tombola/store/tombola.store';
import { CartelleStore } from 'components/cartelle/store/cartelle.store';


import "../styles/globals.scss"
import "../styles/Template.scss"

const rootReducer = combineReducers({
  cartelle: CartelleStore.reducer,
  template: TemplateStore.reducer,
  tombola: TombolaStore.reducer,
})
export type RootState = ReturnType<typeof rootReducer>;

export type AppThunk = ThunkAction<void, RootState, null, Action<string>>; // nel 99% dei casi la dichiarazione di appThunk sarà sempre cosi

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production' // se è in produzione non include i devtools
})

export type AppDispatch = typeof store.dispatch; // server per fare THEN e CATCH quando si fa la dispatch vedi addProduct 


const MyApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles?.parentElement?.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Provider store={store}>
        <Head>
          <title>My App</title>
          <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        </Head>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Dashboard>
            <Component {...pageProps} />
          </Dashboard>
        </ThemeProvider>
      </Provider>
    </>
  );
};

export default MyApp;
