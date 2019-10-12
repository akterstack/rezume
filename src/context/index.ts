import React from 'react';
import * as java from './java';

export const StackContext = React.createContext(java);

export const StackProvider = StackContext.Provider;
export const StackConsumer = StackContext.Consumer;

export const stack = { java };
