import React from 'react';

const Container = ({children}) => (
  <div style={{height: "200px", overflow: 'auto'}}>
    {children}
  </div>
)

export { Container };