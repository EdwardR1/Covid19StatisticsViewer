import React from 'react';

const Heading = ({title, data}) => (
  <div className="flex-row align-items-center justify-content-around">
    <h1>{title}</h1>
    <h2>{data}</h2>
  </div>
)

export { Heading };