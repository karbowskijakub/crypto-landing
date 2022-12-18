import React, { useState } from 'react';
import { crypto,strategy,results,core } from '../data/Crypto/crypto.ts';

export const CryptoContext = React.createContext({
    crypto: [],
    strategy:[],
    results:[],
    core:[]

  });

const CryptoProvider = ({children}) => {
  return (
    <CryptoContext.Provider
    value={{
      crypto,
      strategy,
      results,
      core
    }}
  >
    {children}
  </CryptoContext.Provider>
  );
};

export default CryptoProvider;



