import React from 'react';

export interface HelloProps {
  compiler: string,
  framework: string
}

export const Application = (props: HelloProps) => <h1>Hello from {props.compiler} and {props.framework}!</h1>