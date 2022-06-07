import { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import { auth } from '../firebase';
import '../styles/globals.css';
function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState(null);
  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) setUser(user)
      else {
        setUser(null)
      }
    })
  }, [])

  // useEffect(() => {
  //   auth.onAuthStateChanged(user => {
  //     if (user) setUser(user)
  //     else setUser(null)
  //   })
  // }, [])

  return (
    <>
      <NavBar user={user} />
      <Component {...pageProps} user={user} />
      <Footer />
    </>
  )
}

export default MyApp
