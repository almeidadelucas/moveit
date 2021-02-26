import { ChallengesProvider } from '../contexts/ChallengesContext';
import { useState } from 'react';

import '../styles/global.css';

function MyApp({ Component, pageProps }) {
  return (
    <Component {...pageProps} />
  )
}

export default MyApp
