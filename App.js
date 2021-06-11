import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';
import * as firebase from 'firebase';

import { Navigation } from './infrastructure/navigation';
import { theme } from './infrastructure/theme';
import { AuthenticationContextProvider } from './src/services/authentication/authentication.context';

const firebaseConfig = {
  apiKey: 'AIzaSyBNj9hv_QU3EREfwl37Dfzbawj8jpiWQrw',
  authDomain: 'mealstogo-85def.firebaseapp.com',
  projectId: 'mealstogo-85def',
  storageBucket: 'mealstogo-85def.appspot.com',
  messagingSenderId: '410443333760',
  appId: '1:410443333760:web:c0a5c3f8adbfaa8399a665',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <AuthenticationContextProvider>
        <Navigation />
      </AuthenticationContextProvider>
    </ThemeProvider>
  );
}
