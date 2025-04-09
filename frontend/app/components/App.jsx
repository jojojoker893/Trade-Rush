'use client'

import { useState } from 'react';
import Home from './Home';
import SignUp from './SignUp';
import SignIn from './SignIn';

const App = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [isSignIn, setIsSignIn] = useState(false);

  if (isSignUp) {
    return <SignUp onBack={() => setIsSignUp(false)} />;
  }

  if (isSignIn) {
    return <SignIn onBack={() => setIsSignIn(false)} />;
  }

  return (
    <Home setIsSignUp={setIsSignUp} setIsSignIn={setIsSignIn} />
  );
}

export default App;