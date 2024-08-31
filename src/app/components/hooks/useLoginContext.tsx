import { useState } from 'react';

export default function useLoginContext() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [id, setId] = useState<string>("");

  const setLogIn = (id: string) => {
    setId(id);
    setIsLoggedIn(id !== "");
  }

  const setLogOut = () => {
    setId("");
    setIsLoggedIn(false);
  }

  return { isLoggedIn, setIsLoggedIn, id, setId, setLogIn, setLogOut }
}