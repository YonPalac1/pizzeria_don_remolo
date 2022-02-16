import React, { useEffect } from 'react';
import { useSelector } from 'react-redux'

export const Home = () => {
  const user = useSelector(state => state.auth.user)

  return <>
    {user?.name ? <p>Bienvenido {user.name}</p> : "Home sin logear  "}
  </>
};
