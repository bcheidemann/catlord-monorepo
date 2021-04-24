import React, { useEffect, useState } from 'react';
import { Message } from '@catlord/api-interfaces';
import { Screen } from '@catlord/components';
import Logo from '../assets/logo.png';

export const App = () => {
  // const [m, setMessage] = useState<Message>({ message: '' });

  // useEffect(() => {
  //   fetch('http://localhost:3333/api')
  //     .then((r) => r.json())
  //     .then(setMessage);
  // }, []);

  return (
    <Screen logo={Logo} />
  );
};

export default App;
