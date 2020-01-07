import React from 'react';
import deepmerge from 'deepmerge';
import * as fullStack from './full-stack';
import * as java_ from './java';
import * as javascript_ from './javascript';

export const StackContext = React.createContext(fullStack);

export const StackProvider = StackContext.Provider;
export const StackConsumer = StackContext.Consumer;

const java = deepmerge(fullStack, java_);
const javascript = deepmerge(fullStack, javascript_);
const stack = { fullStack, java, javascript };
export const getStack = (name: string = '') => {
  return stack[name] || stack.fullStack;
};
