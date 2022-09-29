import React from 'react';

declare module 'react' {
  interface HTMLAttributes<T> extends DOMAttributes<T> {
    value?: string;
    active?: string;
  }
}

declare module '*.svg?inline' {
  const content: any;
  export default content;
}
