// @ts-nocheck
import React, { useState } from 'react';
import { crypto,strategy,results,core } from '../data/Crypto/crypto.js';

export const CryptoContext = React.createContext({
    crypto: [],
    strategy:[],
    results:[],
    core:[]

  });

const CryptoProvider = ({children}:any) => {
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



