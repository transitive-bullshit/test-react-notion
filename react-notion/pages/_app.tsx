import React from 'react'

import '../styles/globals.css'

// core styles shared by all of react-notion (required)
import 'react-notion/dist/styles.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
